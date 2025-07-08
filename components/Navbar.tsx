'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MdOutlineModeOfTravel } from 'react-icons/md'
import { RxDividerVertical } from 'react-icons/rx'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'

import cn from 'classnames'

const menus = [
  { id: 1, title: '로그인', url: '/users/login' },
  { id: 2, title: '회원가입', url: '/users/signup' },
  { id: 3, title: 'FAQ', url: '/faqs' },
]

type defaultFilter = 'location' | 'checkIn' | 'checkOut' | 'guests'

interface FilterProps {
  location: string
  checkIn: string
  checkOut: string
  guests: number
}

export default function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showFilter, setShowFilter] = useState<boolean>(false)
  const [detailFilter, setDetailFilter] = useState<null | defaultFilter>(null)
  const [filterValue, setFilterValue] = useState<FilterProps>({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 0,
  })
  const router = useRouter()

  return (
    <nav
      className={cn(
        'border border-b-gray-20 w-full shadow-sm p-4 sm:px-10 flex justify-between align-center fixed top-0 bg-white',
        {
          '!h-44': showFilter === true,
          '!items-start': showFilter === true,
        },
      )}
    >
      <div className="grow basis-0 hiddenfont-semibold text-lg sm:text-lg text-rose-500 cursor-pointer sm:flex sm:gap-2">
        <MdOutlineModeOfTravel className="text-4xl my-auto" />
        <div className="my-auto">Nextbnb</div>
      </div>
      {showFilter === false ? (
        <div className="w-full sm:w-[280px] border py-1.5 border-gray-200 rounded-full hover:shadow-lg cursor-pointer flex justify-between pl-6 pr-2">
          <div
            role="presentation"
            className="flex justify-center gap-1"
            onClick={() => setShowFilter(true)}
          >
            <div className="my-auto font-semibold text-sm">어디든지</div>
            <RxDividerVertical className="text-gray-200 my-auto text-2xl" />
            <div className="my-auto font-semibold text-sm">언제든</div>
            <RxDividerVertical className="text-gray-200 my-auto text-2xl" />
            <div className="my-auto font-semibold text-sm">게스트</div>
          </div>
          <button
            type="button"
            className="bg-rose-500 text-white rounded-full w-8 h-8 my-auto"
          >
            <AiOutlineSearch className="text-lg m-auto font-semibold" />
          </button>
        </div>
      ) : (
        <div className="sm:w-[310px] cursor-pointer w-full relative">
          <div className="flex justify-center gap-7 h-14 text-center items-center">
            <button
              type="button"
              className="font-semibold underline underline-offset-8"
            >
              숙소
            </button>
            <button
              type="button"
              className="font-gray-700"
              onClick={() => window.alert('서비스 준비중입니다.')}
            >
              체험
            </button>
            <button
              type="button"
              className="font-gray-700"
              onClick={() => window.alert('서비스 준비중입니다.')}
            >
              온라인 체험
            </button>
            <button
              type="button"
              className="underline underline-offset-8 text-gray-500 hover:text-black"
              onClick={() => setShowFilter(false)}
            >
              필터닫기
            </button>
          </div>
          <div className="w-[90%] sm:max-w-3xl flex flex-col sm:flex-row border border-gray-200 rounded-lg py-4 sm:py-2 sm:rounded-full shadow-sm bg-white hover:shadow-lg cursor-pointer justify-between fixed top-20 inset-x-0 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-4 w-full relative sm:pl-2">
              <button
                type="button"
                onClick={() => setDetailFilter('location')}
                className={cn(
                  'font-semibold text-xs rounded-full hover:bg-gray-100 py-3 px-6 text-left',
                  {
                    'shadow bg-white': detailFilter === 'location',
                  },
                )}
              >
                여행지
                <div className="text-xs text-gray-500 mt-1">
                  {filterValue?.location || '여행지 검색'}
                </div>
              </button>
              <button
                type="button"
                onClick={() => setDetailFilter('checkIn')}
                className={cn(
                  'font-semibold text-xs rounded-full hover:bg-gray-100 py-3 px-6 text-left',
                  {
                    'shadow bg-white': detailFilter === 'checkIn',
                  },
                )}
              >
                체크인
                <div className="text-xs text-gray-500 mt-1">
                  {filterValue?.checkIn || '날짜 추가'}
                </div>
              </button>
              <button
                type="button"
                onClick={() => setDetailFilter('checkOut')}
                className={cn(
                  'font-semibold text-xs rounded-full hover:bg-gray-100 py-3 px-6 text-left',
                  {
                    'shadow bg-white': detailFilter === 'checkOut',
                  },
                )}
              >
                체크아웃
                <div className="text-xs text-gray-500 mt-1">
                  {filterValue?.checkOut || '날짜 추가'}
                </div>
              </button>
              <button
                type="button"
                onClick={() => setDetailFilter('guests')}
                className={cn(
                  'font-semibold text-xs rounded-full hover:bg-gray-100 py-3 px-6 text-left',
                  {
                    'shadow bg-white': detailFilter === 'guests',
                  },
                )}
              >
                여행자
                <div className="text-xs text-gray-500 mt-1">
                  {filterValue?.guests || '게스트 추가'}
                </div>
              </button>
              {detailFilter === 'location' && (
                <LocationFilter
                  filterValue={filterValue}
                  setFilterValue={setFilterValue}
                  setDetailFilter={setDetailFilter}
                />
              )}
            </div>
            <button
              type="button"
              className="bg-rose-600 text-white rounded-full h-10 mx-4 sm:w-24 my-auto flex justify-center gap-1 px-3 py-2"
              onClick={() => {
                setShowFilter(false)
                setDetailFilter(null)
              }}
            >
              <AiOutlineSearch />
              검색
            </button>
          </div>
        </div>
      )}

      <div className="grow basis-0  hidden sm:flex gap-4 align-middle justify-end relative">
        <button
          type="button"
          className="font-semibold text-sm my-auto px-4 py-3 rounded-full hover:bg-gray-50"
        >
          당신의 공간을 등록해주세요
        </button>
        <button
          type="button"
          onClick={() => setShowMenu((val) => !val)}
          className="flex align-middle gap-3 rounded-full border border-gray-20 shadow-sm px-4 py-3 my-auto hover:shadow-lg"
        >
          <AiOutlineMenu />
          <AiOutlineUser />
        </button>
        {showMenu && (
          <div className="border border-gray-200 shadow-lg py-2 flex flex-col absolute top-12 bg-white w-60 rounded-lg">
            {menus?.map((menu) => (
              <button
                type="button"
                key={menu.id}
                className="h-10 hover:bg-gray-50 pl-3 text-sm text-gray-700 text-left"
                onClick={() => router.push(menu.url)}
              >
                {menu.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
interface FilterComponentProps {
  filterValue: FilterProps
  setFilterValue: React.Dispatch<React.SetStateAction<FilterProps>>
  setDetailFilter: React.Dispatch<React.SetStateAction<defaultFilter | null>>
}

const LocationFilter = ({
  filterValue,
  setFilterValue,
  setDetailFilter,
}: FilterComponentProps) => {
  return (
    <div className="absolute top-80 sm:top-[70px] border border-gray-200 px-8 py-10 flex flex-col bg-white w-full mx-auto inset-x-0 sm:max-w-3xl sm:w-[780px] rounded-xl">
      <div className="text-sm font-semibold">지역으로 검색하기</div>
      <div className="">
        {['서울', '부산', '대구', '인천', '광주', '대전', '울산']?.map(
          (value) => (
            <button
              key={value}
              type="button"
              className={cn(
                'border rounded-lg px-5 py-2.5 hover bg-gray-200 focus:bg-rose-500 text-left',
                {
                  'bg-rose-600 text-white': filterValue.location === value,
                },
              )}
              onClick={() => {
                setFilterValue({
                  ...filterValue,
                  location: value,
                })
                setDetailFilter('checkIn')
              }}
            >
              {value}
            </button>
          ),
        )}
      </div>
    </div>
  )
}

const CheckInFilter = ({
  filterValue,
  setFilterValue,
  setDetailFilter,
}: FilterComponentProps) => {
  return (
    <div className="absolute top-80 sm:top-[70px] border border-gray-200 px-8 py-10 flex flex-col bg-white w-full mx-auto inset-x-0 sm:max-w-3xl sm:w-[780px] rounded-xl">
      <div className="text-sm font-semibold">지역으로 검색하기</div>
      <div className="">
        {['서울', '부산', '대구', '인천', '광주', '대전', '울산']?.map(
          (value) => (
            <button
              key={value}
              type="button"
              className={cn(
                'border rounded-lg px-5 py-2.5 hover bg-gray-200 focus:bg-rose-500 text-left',
                {
                  'bg-rose-600 text-white': filterValue.location === value,
                },
              )}
              onClick={() => {
                setFilterValue({
                  ...filterValue,
                  location: value,
                })
                setDetailFilter('checkIn')
              }}
            >
              {value}
            </button>
          ),
        )}
      </div>
    </div>
  )
}
