import CategoryList from '@/components/CategoryList'
import { GirdLayout, RoomItem } from '@/components/RoomList'
import { RoomType } from '@/interface'

export default async function Home() {
  const data: RoomType[] = await getRooms()

  return (
    <>
      <CategoryList />
      <GirdLayout>
        {data?.map((room) => (
          <RoomItem key={room.id} room={room} />
        ))}
      </GirdLayout>
    </>
  )
}

async function getRooms() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rooms`, {
    cache: 'force-cache',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch rooms')
  }

  return res.json()
}
