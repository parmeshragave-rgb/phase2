import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0};

const counterSlice = createSlice({
  name: "rtkcounter",
  initialState,
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    clear: (state) => { state.value = 0 },
  },
});

export const { increment, decrement, clear } = counterSlice.actions;

export default counterSlice.reducer;
