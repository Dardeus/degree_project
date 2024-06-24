import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
  username: localStorage.getItem('username') || "Абитуриент #",
  password: '',
  logIn: localStorage.getItem('logIn') || false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload
      localStorage.setItem('username', action.payload)
    },
    setPassword(state, action) {
      state.password = action.payload
    },
    setLogIn(state, action) {
      state.logIn = action.payload
      localStorage.setItem('logIn', action.payload)
    }
  },
})

export const {setUsername, setPassword, setLogIn} = authSlice.actions;

export default authSlice.reducer;