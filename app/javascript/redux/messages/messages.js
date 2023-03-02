import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API URL
const API_URL = 'http://localhost:5000//api/v1/messages';

// Actions String
const GET_MSG = 'get-messages';

// Action Thunk
export const retrieveMessages = createAsyncThunk(GET_MSG, async () => {
  const res = fetch(API_URL);
  const data = (await res).json();
  return data;
});

// Reducers
const messagesSlice = createSlice({
  name: 'messages',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(
      retrieveMessages.fulfilled,
      (state, action) => action.payload,
    );
  },
});

export default messagesSlice.reducer;
