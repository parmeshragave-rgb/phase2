
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import {thunk} from "redux-thunk"; 


import CounterReducer from "./Counter/CounterReducer";
import ThemeReducer from "./ThemeReducer";
import UserReducer from "./users/UserReducer";


import counterReducer from "./RTK/CounterSlice";

const rootReducer = combineReducers({
  counter: CounterReducer,
  theme: ThemeReducer,
  user: UserReducer,
  rtkcounter: counterReducer, 
});


const store = createStore(rootReducer, applyMiddleware(logger, thunk));


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
