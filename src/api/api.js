import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "c0ba6f58-3d20-4f5b-be0c-b8808f29f5bf"
  }
})

export const authAPI = {

  me() {
    return instance.get(`auth/me`)
  },

}

export const usersAPI = {

  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
      return response.data
    })
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then(response => {
      return response.data
    })
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then(response => {
      return response.data
    })
  },
  getUserProfile(userId) {
    return instance.get(`profile/` + userId)
  }
}




