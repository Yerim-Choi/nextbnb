import { selector } from 'recoil'
import { filterState } from '.'
import dayjs from 'dayjs'

export const calculateFilterState = selector({
  key: 'FilterStateSelector',
  get: ({ get }) => {
    const filter = get(filterState)
    const checkInDate = filter.checkIn ? dayjs(filter.checkIn) : dayjs()
    const checkOutDate = filter.checkOut ? dayjs(filter.checkOut) : dayjs()
    const guestCount = filter.guest || 1
    const dayCount = checkOutDate?.diff(checkInDate, 'days')

    return {
      dayCount,
      guestCount,
    }
  },
})
