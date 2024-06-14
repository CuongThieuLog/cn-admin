import { PaginationType } from '@/libs/types/pagination'

export type INCOME_OPTIONS_TYPE = {
  value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  label: string
}

export type UserType = {
  id: number
  name?: string
  email: string
  created_at?: string
  profile_photo_url?: string
  is_active?: string | number
}

export type UserListType = {
  data: UserType[]
} & PaginationType

export type UserSearchInputType = {
  search?: string
  has_assets?: number
  income?: number
  is_paid?: number
  willing?: number
  number_of_application_from?: string
  number_of_application_to?: string
  is_active?: string | number
  page?: string
  per_page?: string
} & PaginationType

export type UserListQueryInputType = {
  column?: string
  sort_by?: 'asc' | 'desc'
} & UserSearchInputType
export type BookMarkType = {
  id: string
  name: string
  address: string
  builded_year: string
  occupation_area: number
  amount: number
  yield: number
}

export type UserDetailType = {
  id: string
  name: string
  birthday: string
  address: string
  has_assets: 0 | 1
  asset_number: number
  email: string
  tel: string
  income: number
  willing: number
  asset_name: string
  book_marks: BookMarkType[]
}

export type UserDetailResponseType = {
  data: UserDetailType
}

export type DeleteUserParam = {
  userId: string
}

export type QueryInputUserDetailType = {
  userId: string
  sort_by?: string
  column?: string
}
