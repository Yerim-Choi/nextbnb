'use client'

import CategoryList from '@/components/CategoryList'
import Loader from '@/components/Loader'
import { GirdLayout, RoomItem } from '@/components/RoomList'
import { RoomType } from '@/interface'
import { useQuery } from 'react-query'

export default function Home() {
  const fetchRoom = async () => {
    const data = await fetch(`/api/rooms`)
    return data.json()
  }

  const { data, isLoading } = useQuery('rooms', fetchRoom)

  if (isLoading) {
    return <Loader className="mt-60 mb-40" />
  }

  return (
    <>
      <CategoryList />
      <GirdLayout>
        {data?.map((room: RoomType) => (
          <RoomItem key={room.id} room={room} />
        ))}
      </GirdLayout>
    </>
  )
}

// async function getRooms() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rooms`, {
//     cache: 'force-cache',
//   })

//   if (!res.ok) {
//     throw new Error('Failed to fetch rooms')
//   }

//   return res.json()
// }
