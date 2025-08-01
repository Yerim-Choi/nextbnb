'use client'

import { useState } from 'react'
import { RoomType } from '@/interface'
import { BLUR_DATA_URL } from '@/constants'
import Image from 'next/image'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import ImageListModal from './ImageListModal'
import ShareButton from './ShareButton'
import LikeButton from './LikeButton'

export default function HeaderSection({ data }: { data: RoomType }) {
  const [showImageModal, setShowImageModal] = useState<boolean>(false)

  return (
    <>
      <h1 className="text-lg mg:text-3xl font-medium px-4">{data?.title}</h1>
      <div className="flex w-full justify-between items-center px-4">
        <div className="underline text-xs md:text-sm mt-2">{data.address}</div>
        <div className="flex gap-2 text-xs md:text-sm mt-2">
          <ShareButton data={data} />
          <LikeButton room={data} />
        </div>
      </div>

      <div className="mt-6 relative">
        <div className="grid md:grid-cols-2 md:gap-4 gap-2 align-middle h-[400px] overflow-hidden md:rounded-lg">
          {data?.images?.slice(0, 2)?.map((img) => {
            return (
              <div key={img} className=" w-full relative">
                <Image
                  src={img}
                  alt="room img"
                  style={{ objectFit: 'cover' }}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  fill
                />
              </div>
            )
          })}
        </div>
        <button
          type="button"
          className="absolute right-6 bottom-8 bg-white px-4 py-1.5 rounded-md text-sm border-black flex gap-2 items-center hover:shadow-lg"
          onClick={() => setShowImageModal(true)}
        >
          <AiOutlineUnorderedList />
          사진 모두 보기
        </button>
      </div>
      <ImageListModal
        isOpen={showImageModal}
        closeModal={() => setShowImageModal(false)}
        data={data}
      />
    </>
  )
}
