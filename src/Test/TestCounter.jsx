
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/increment":
      return { value: state.value + 1 };
    case "counter/decrement":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

export { counterReducer };


export const store = createStore(counterReducer);

export default function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => dispatch({ type: "counter/increment" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "counter/decrement" })}>
        Decrement
      </button>
    </div>
  );
}

export function CounterWithProvider() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
