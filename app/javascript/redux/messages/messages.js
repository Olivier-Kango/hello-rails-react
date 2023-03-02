import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Action Thunk
export const retrieveMessages = createAsyncThunk('get-messages', async () => {
  const res = fetch('http://localhost:5000//api/v1/messages');
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
