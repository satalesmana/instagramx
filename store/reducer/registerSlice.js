import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
    name: 'register',
    initialState: {
      email: '',
      fullName: '',
      userName: '',
      password: '',
    },
    reducers: {
        setRegisterEmail: (state, action) => {
            state.email = action.payload
        },
        setRegisterFullName: (state, action) => {
            state.fullName = action.payload
        },
        setRegisterUsername: (state, action) => {
            state.userName = action.payload
        },
        setRegisterPassword: (state, action) => {
            state.password = action.payload
        },
        clearRegister:(state) => {
            state.email = ''
            state.fullName = ''
            state.userName = ''
            state.password = ''
        }
    }
});

export const { 
    setRegisterEmail,
    setRegisterFullName,
    setRegisterUsername,
    setRegisterPassword
} = registerSlice.actions
export default registerSlice.reducer


