import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      id:'',
      email: '',
      fullName: '',
      userName: '',
    },
    reducers: {
        setUserId: (state, action) => {
            state.id = action.payload
        },
        setUserEmail: (state, action) => {
            state.email = action.payload
        },
        setUserFullName: (state, action) => {
            state.fullName = action.payload
        },
        setUserName: (state, action) => {
            state.userName = action.payload
        },
        clearRegister:(state) => {
            state.id = ''
            state.email = ''
            state.userName = ''
            state.fullName = ''
        }
    }
});

export const { 
    setUserId,
    setUserEmail,
    setUserFullName,
    setUserName,
    clearRegister
} = userSlice.actions
export default userSlice.reducer