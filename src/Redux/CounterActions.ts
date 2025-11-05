import { INCREMENT,DECREMENT ,CLEAR } from "./CounterTypes";

interface decrementAction{
    type:string
}
export const decrement = ()  :decrementAction =>({
    type:DECREMENT
});

interface incrementAction{
    type:string
}
export const increment = () :incrementAction=>({
    type:INCREMENT
});

interface clearAction{
    type:string
}

export const clear=():clearAction =>({
    type:CLEAR
});

export type ActionType=incrementAction | decrementAction | clearAction
