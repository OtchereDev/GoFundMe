import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    registerUser: (state,{payload}) =>{
  
      state.email = payload
    },

    removeUser: (state) =>{
      state.email =null
    }

  },
})

// Action creators are generated for each case reducer function
export const { registerUser, removeUser } = userSlice.actions

export default userSlice.reducer