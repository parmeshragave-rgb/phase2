import { INCREMENT,DECREMENT,CLEAR } from "./CounterTypes"
import type { ActionType } from "./CounterActions"
interface initialState{
    count:number
}

const initialState:initialState={
      count:0
}



const CounterReducer = (state=initialState,action:ActionType):initialState => {
    switch(action.type){
        case INCREMENT:
            return {...state,count:state.count+1}
        case DECREMENT:
            return{...state,count:state.count-1}
        case CLEAR:
            return{...state,count:0}
        default:
            return state
    }

}

export default CounterReducer