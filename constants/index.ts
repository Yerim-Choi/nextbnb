import { IoPartlySunnyOutline } from 'react-icons/io5'
import { MdOutlineBedroomChild, MdOutlineSurfing } from 'react-icons/md'
import {
  GiHolyOak,
  GiCaveEntrance,
  GiCampingTent,
  GiBarn,
  GiSkier,
  GiStarKey,
} from 'react-icons/gi'
import { FaHouseUser, FaUmbrellaBeach } from 'react-icons/fa6'
import { BiSolidTree, BiWater } from 'react-icons/bi'
import { AiOutlineStar } from 'react-icons/ai'
import { TbSwimming, TbMoodKid } from 'react-icons/tb'

export const CATEGORY = [
  '전망좋은',
  '자연',
  '동굴',
  '캠핑장',
  '방',
  '한옥',
  '해변',
  '국립공원',
  '인기',
  '수영장',
  '농장',
  '통나무집',
  '디자인',
  '스키',
  '호수',
  '키즈',
  '저택',
  '신규',
  '섬',
  '주택',
  '서핑',
  '골프장',
]

export const CATEGORY_DATA = [
  { title: '전망좋은', Icon: IoPartlySunnyOutline },
  { title: '자연', Icon: GiHolyOak },
  { title: '동굴', Icon: GiCaveEntrance },
  { title: '캠핑장', Icon: GiCampingTent },
  { title: '방', Icon: MdOutlineBedroomChild },
  { title: '한옥', Icon: FaHouseUser },
  { title: '해변', Icon: FaUmbrellaBeach },
  { title: '국립공원', Icon: BiSolidTree },
  { title: '인기', Icon: AiOutlineStar },
  { title: '수영장', Icon: TbSwimming },
  { title: '농장', Icon: GiBarn },
  { title: '스키', Icon: GiSkier },
  { title: '호수', Icon: BiWater },
  { title: '키즈', Icon: TbMoodKid },
  { title: '신규', Icon: GiStarKey },
  { title: '서핑', Icon: MdOutlineSurfing },
]

/** @example - https://png-pixel.com/ */
export const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcUg8AAa0BFSX8uBwAAAAASUVORK5CYII='

export const DEFAULT_LAT = '37.565337'
export const DEFAULT_LNG = '126.9772095'
export const ZOOM_LEVEL = 7

const FEATURE_TYPE = {
  FREE_CANCEL: 'FREE_CANCEL',
  PAID_CANCEL: 'PAID_CANCEL',
  SELF_CHECKIN: 'SELF_CHECKIN',
  SELF_CHECKIN_DISALLOWED: 'SELF_CHECKIN_DISALLOWED',
  FREE_OFFICE_SPACE: 'FREE_OFFICE_SPACE',
  NO_OFFICE_SPACE: 'NO_OFFICE_SPACE',
}

type FeatureType = (typeof FEATURE_TYPE)[keyof typeof FEATURE_TYPE]

export const FeatureDesc: Record<FeatureType, string> = {
  [FEATURE_TYPE.FREE_CANCEL]: '무료 취소가 가능합니다.',
  [FEATURE_TYPE.PAID_CANCEL]: '무료 취소가 불가능합니다.',
  [FEATURE_TYPE.SELF_CHECKIN]: '셀프 체크인이 가능합니다.',
  [FEATURE_TYPE.SELF_CHECKIN_DISALLOWED]: '셀프 체크인이 불가능합니다.',
  [FEATURE_TYPE.FREE_OFFICE_SPACE]: '사무 시설이 있습니다.',
  [FEATURE_TYPE.NO_OFFICE_SPACE]: '사무 시설이 없습니다.',
}
