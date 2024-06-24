import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const Status = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error'
}

const initialState = {
  items: [],
  status: Status
}

export const fetchMessages = createAsyncThunk(
    'messages/fetchMessagesStatus',
        async (url, thunkAPI) => {
          const { data } = await axios.get(url)

          if (data.length === 0) {
            thunkAPI.rejectWithValue("Нет сообщений")
          }

          return data
        }
)

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setItem(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => {
      state.status = Status.LOADING
      state.items = []
    })
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = Status.SUCCESS
    })
    builder.addCase(fetchMessages.rejected, (state) => {
      state.status = Status.ERROR
      state.items = []
    })
  }
})

export const {setItem} = chatSlice.actions;

export default chatSlice.reducer;