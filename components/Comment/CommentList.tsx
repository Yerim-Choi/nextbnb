'use client'

import { useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import CommentListModal from './CommentListModal'

export const COMMENTS = [
  {
    id: 1,
    name: '사용자1',
    createdAt: '2025-01-01',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    image: 'https://picsum.photos/200/301',
  },
  {
    id: 2,
    name: '사용자2',
    createdAt: '2025-01-02',
    comment:
      'Suspendisse potenti. Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem.',
    image: 'https://picsum.photos/200/302',
  },
  {
    id: 3,
    name: '사용자3',
    createdAt: '2025-01-03',
    comment:
      'Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.',
    image: 'https://picsum.photos/200/303',
  },
  {
    id: 4,
    name: '사용자4',
    createdAt: '2025-01-04',
    comment:
      'Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.',
    image: 'https://picsum.photos/200/304',
  },
  {
    id: 5,
    name: '사용자5',
    createdAt: '2025-01-05',
    comment:
      'Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.',
    image: 'https://picsum.photos/200/305',
  },
  {
    id: 6,
    name: '사용자6',
    createdAt: '2025-01-06',
    comment:
      'Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.',
    image: 'https://picsum.photos/200/306',
  },
  {
    id: 7,
    name: '사용자7',
    createdAt: '2025-01-07',
    comment:
      'Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
    image: 'https://picsum.photos/200/307',
  },
  {
    id: 8,
    name: '사용자8',
    createdAt: '2025-01-08',
    comment:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    image: 'https://picsum.photos/200/308',
  },
  {
    id: 9,
    name: '사용자9',
    createdAt: '2025-01-09',
    comment:
      'Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue.',
    image: 'https://picsum.photos/200/309',
  },
  {
    id: 10,
    name: '사용자10',
    createdAt: '2025-01-10',
    comment:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui.',
    image: 'https://picsum.photos/200/310',
  },
]

export default function CommentList() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const closeModal = () => {
    setIsOpenModal(false)
  }

  const openModal = () => {
    setIsOpenModal(true)
  }

  return (
    <>
      <h1 className="font-semibold text-xl mb-2">후기 248개</h1>
      <div className="mt-8 grid md:grid-cols-2 gap-12">
        {COMMENTS?.slice(0, 6)?.map((comment) => (
          <div key={comment.id} className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <img
                src={comment?.image || '/images/user-icon.png'}
                alt="user-icon"
                width={50}
                height={50}
                className="rounded-full w-[50px] h-[50px]"
              />
              <div>
                <h1 className="font-semibold">{comment?.name || '-'}</h1>
                <span className="text-gray-500 text-xs">
                  {comment.createdAt}
                </span>
              </div>
            </div>
            <div className="max-w-md text-gray-600">{comment?.comment}</div>
            <button
              type="button"
              className="underline font-semibold flex gap-1 items-center justify-start"
              onClick={openModal}
            >
              더보기 <BiChevronRight className="text-xl" />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 mb-20">
        <button
          type="button"
          className="border border-gray-700 font-semibold rounded-lg px-6 py-4 flex items-center gap-4 hover:bg-black/5"
          onClick={openModal}
        >
          후기 248개 모두 보기
        </button>
      </div>
      <CommentListModal isOpen={isOpenModal} closeModal={closeModal} />
    </>
  )
}
