import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCESS } from "./UserTypes"
import axios from "axios"
interface FetchUserRequest{
    type:string
}

export const fetchUserRequest= () : FetchUserRequest => ({
    type:FETCH_USERS_REQUEST
})

interface FetchUserSucess{
    type:string
    payload:void
}

export const fetchUserSucess= (users:any[]) : FetchUserSucess => ({
    type:FETCH_USERS_SUCESS,
    payload:users
})
interface FetchUserFailure{
    type:string
     payload:void
}

export const fetchUserFailure= (error:string) : FetchUserFailure => ({
    type:FETCH_USERS_FAILURE,
     payload:error

})

export type ActionTypeUsers=FetchUserRequest | FetchUserSucess| FetchUserFailure

export const fetchUsers= () => {
    
    return (dispatch:any) => {
        dispatch(fetchUserRequest)
             axios.get("https://jsonplaceholder.typicode.com/users")
             .then( res => { const users=res.data
                          dispatch(fetchUserSucess(users))
             })
             .catch(error => {const errmsg=error.message
                              dispatch(fetchUserFailure(errmsg))
             })
    }
} 