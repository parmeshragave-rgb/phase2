import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../Store";
import { increment, decrement, clear } from "./CounterSlice";

function Counter() {
  const count = useSelector((state: RootState) => state.rtkcounter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(clear())}>Clear</button>
    </div>
  );
}

export default Counter;
