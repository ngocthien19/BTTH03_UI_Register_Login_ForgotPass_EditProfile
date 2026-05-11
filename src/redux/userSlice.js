import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
    loading: false
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    updateUser: (state, action) => {
      state.userInfo = action.payload
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
    clearUser: (state) => {
      state.userInfo = null
      localStorage.removeItem('userInfo')
      localStorage.removeItem('accessToken')
    }
  }
})

export const { setLoading, updateUser, clearUser } = userSlice.actions
export default userSlice.reducer