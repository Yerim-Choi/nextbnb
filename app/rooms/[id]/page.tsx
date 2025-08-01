import { ParamsProps, RoomType } from '@/interface'
import HeaderSection from '@/components/RoomDetail/HeaderSection'
import FeatureSection from '@/components/RoomDetail/FeatureSection'
import MapSection from '@/components/RoomDetail/MapSection'
import Comment from '@/components/Comment'

export default async function RoomDetailPage({ params }: ParamsProps) {
  const { id } = params
  const data: RoomType = await getData(id)

  return (
    <div className="mt-8 mb-20 max-w-6xl mx-auto">
      <HeaderSection data={data} />
      <FeatureSection data={data} />
      <Comment room={data} />
      <MapSection data={data} />
    </div>
  )
}

async function getData(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/rooms?id=${id}`,
    {
      next: {
        revalidate: 60 * 60,
      },
    },
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
