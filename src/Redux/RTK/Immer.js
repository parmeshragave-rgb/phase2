

import { createStore } from 'redux'
import { produce } from 'immer'
const InitalState={
    name:"parmesh",
    address:{
        street:'238 main St',
        city:"salem"
    }
}

const UPDATE_STREET='UPDATE_STREET'

const updateStreet=(str)=> {
    return  {
    type:UPDATE_STREET,
    payload:str
}
}

const reducer= (state=InitalState,action) => {
    switch(action.type){
        case UPDATE_STREET:
            // return{
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street:action.payload
            //     }
            //}
            return produce(state,(draft) => {
                draft.address.street=action.payload
            })
            
            default:
                return state
    }
}

const Store=createStore(reducer)
console.log("initialState: ",Store.getState())
Store.subscribe(() => { console.log("updated State",Store.getState())})
Store.dispatch(updateStreet("B 238 Main St"))

