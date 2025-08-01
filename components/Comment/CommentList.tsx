'use client'

import { useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import CommentListModal from './CommentListModal'
import { CommentApiType } from '@/interface'
import { Loader } from '../Loader'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'

export default function CommentList({
  comments,
  isLoading,
  roomId,
}: {
  comments: CommentApiType
  isLoading: boolean
  roomId: number
}) {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const closeModal = () => {
    setIsOpenModal(false)
  }

  const openModal = () => {
    setIsOpenModal(true)
  }

  return (
    <>
      <h1 className="font-semibold text-xl mb-2">
        후기 {comments?.totalCount}개
      </h1>

      <div className="mt-8 grid md:grid-cols-2 gap-12">
        {isLoading ? (
          <Loader className="md:col-span-2" />
        ) : (
          <>
            {comments?.data.slice(0, 6)?.map((comment) => (
              <div key={comment.id} className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <img
                    src={comment?.user?.image || '/images/user-icon.png'}
                    alt="user-icon"
                    width={50}
                    height={50}
                    className="rounded-full w-[50px] h-[50px]"
                  />
                  <div>
                    <h1 className="font-semibold">
                      {comment?.user?.name || '-'}
                    </h1>
                    <span className="text-gray-500 text-xs">
                      {dayjs(comment.createdAt).format('YYYY-MM-DD HH:mm:ss')}
                    </span>
                  </div>
                </div>
                <div className="max-w-md text-gray-600">{comment?.body}</div>
                <button
                  type="button"
                  className="underline font-semibold flex gap-1 items-center justify-start"
                  onClick={openModal}
                >
                  더보기 <BiChevronRight className="text-xl" />
                </button>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="mt-8 mb-20">
        <button
          type="button"
          className="border border-gray-700 font-semibold rounded-lg px-6 py-4 flex items-center gap-4 hover:bg-black/5"
          onClick={openModal}
        >
          후기 {comments?.totalCount}개 모두 보기
        </button>
      </div>
      {isOpenModal && (
        <CommentListModal
          isOpen={isOpenModal}
          closeModal={closeModal}
          roomId={roomId}
        />
      )}
    </>
  )
}
