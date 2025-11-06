import { createStore,combineReducers,applyMiddleware} from "redux";
import CounterReducer from "./CounterReducer";
import ThemeReducer from "./ThemeReducer";
import logger from "redux-logger";
const RootReducer=combineReducers({
    counter:CounterReducer,
    theme:ThemeReducer
})
const store = createStore(RootReducer,applyMiddleware(logger));
export type RootState=  ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;