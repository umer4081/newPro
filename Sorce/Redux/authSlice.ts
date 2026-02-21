import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
    isLoggedIn: boolean
    activeTab:number
}

const initialState: AuthState = {
    isLoggedIn: false,
     activeTab: 0
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.isLoggedIn = false
      },
     setTab: (state, action) => {
      state.activeTab = action.payload
    },
     
  },
})

export const { login, logout ,setTab} = authSlice.actions
export default authSlice.reducer
