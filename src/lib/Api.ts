import axios from 'axios'
import { IUser } from './types' 

const baseURL = 'http://localhost:3020'

export const getUsers = async (): Promise<IUser[]> => {
  const response = await axios.get(`${baseURL}/users`)
  return response.data
}

export const getUser = async (id: string): Promise<IUser> => {
  const response = await axios.get(`${baseURL}/users/${id}`)
  return response.data
}

export const addUser = async (user: Omit<IUser, 'id'>): Promise<void> => {
  await axios.post(`${baseURL}/users`, user, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const updateUser = async (id: string, user: IUser): Promise<void> => {
  await axios.put(`${baseURL}/users/${id}`, user, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const deleteUser = async (id: number | string): Promise<void> => {
  await axios.delete(`${baseURL}/users/${id}`)
}
