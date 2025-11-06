import { createStore,combineReducers} from "redux";
import CounterReducer from "./CounterReducer";
import ThemeReducer from "./ThemeReducer";
const RootReducer=combineReducers({
    counter:CounterReducer,
    theme:ThemeReducer
})
const store = createStore(RootReducer);
export type RootState=  ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;