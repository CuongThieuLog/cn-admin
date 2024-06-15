import { PaginationType } from '@/libs/types/pagination'

export type INCOME_OPTIONS_TYPE = {
  value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  label: string
}

export type UserType = {
  id: number
  name?: string
  email: string
  is_active?: string | number
  profile_photo_url?: string
  created_at?: string
}

export type UserListType = {
  data: UserType[]
} & PaginationType

export type UserSearchInputType = {
  search?: string
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
  email: string
  is_active?: string | number
  created_at: string
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
