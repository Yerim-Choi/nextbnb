import toast from 'react-hot-toast'
import { CiHeart } from 'react-icons/ci'

export default function LikeButton() {
  const toggleLike = () => {
    // '/api/like POST' 요청 보내는 로직 추가

    toast.success('찜 목록에 추가했습니다.')
  }

  return (
    <>
      <button
        type="button"
        className="flex gap-2 items-center px-2 py-1.5 rounded-lg hover:bg-black/10"
        onClick={toggleLike}
      >
        <CiHeart />
        <span>저장</span>
      </button>
    </>
  )
}
