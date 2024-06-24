import {configureStore} from '@reduxjs/toolkit'
import authReducer from './slices/authState'
import chatReducer from './slices/chatState'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
  },
})