'use client'
import { BLUR_DATA_URL } from '@/constants'
import { RoomType } from '@/interface'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { selectedRoomState } from '@/atom'
import Link from 'next/link'

export default function SelectedRoom() {
  const [selectedRoom, setSelectedRoom] = useRecoilState(selectedRoomState)

  return (
    <div className="fixed inset-x-0 mx-auto bottom-20 rounded-lg shadow-lg max-w-xs md:max-w-sm z-10 w-full bg-white ">
      {selectedRoom && (
        <div className="flex flex-col relative">
          <button
            type="button"
            onClick={() => setSelectedRoom(null)}
            className="absolute top-2 right-2 text-white text-2xl bg-black/20 rounded-full"
          >
            <AiOutlineCloseCircle />
          </button>
          <Link href={`/rooms/${selectedRoom.id}`}>
            <div className="rounded-lg-t h-[200px] overflow-hidden">
              <Image
                src={selectedRoom?.images?.[0]}
                width={384}
                height={384}
                placeholder="blur"
                alt="room img"
                className="rounded-t-lg"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
            <div className="p-4 font-semibold bg-white rounded-b-lg text-sm">
              <div className="mt-2">{selectedRoom.title}</div>
              <div className="mt-1 text-gray-400">{selectedRoom.address}</div>
              <div className="mt-1">
                {selectedRoom.price?.toLocaleString()}원
                <span className="text-gray-400"> /박</span>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}
