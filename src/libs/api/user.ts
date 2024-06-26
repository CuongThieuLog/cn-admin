import { UserListQueryInputType, UserListType } from '@/features/user'
import { QueryInputUserDetailType, UserDetailResponseType } from '@/features/user/type'
import request from '../config/axios'

export const getListUser = async (params: UserListQueryInputType) => {
  try {
    const response = await request.get<UserListType>('/user', { params })
    return response.data
  } catch (error) {
    throw error
  }
}

export const getUserDetail = async ({ column, sort_by, userId }: QueryInputUserDetailType) => {
  try {
    const response = await request.get<UserDetailResponseType>(`/user/${userId}`, {
      params: {
        sort_by,
        column,
      },
    })
    return response.data.data
  } catch (error) {
    throw error
  }
}

export const deleteUser = async (userId: string) => {
  try {
    const response = await request.delete(`/user/${userId}`)
    return response.data
  } catch (error) {
    throw error
  }
}
