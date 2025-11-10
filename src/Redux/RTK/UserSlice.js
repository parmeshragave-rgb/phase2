import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const initialStateUser ={
  loading: false,
  users: [],
  error: "",
};

const fetchUsers=createAsyncThunk('user/fetchUsers',() => {
             axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => res.data.map((user) => user.id))
})
const UserSlice=createSlice({
    name:"user",
    initialStateUser,
    extraReducers:(builder) => {
        builder.addCase(fetchUsers.pending ,state => state.loading=true)
        builder.addCase(fetchUsers.fulfilled ,(state,action) => {state.loading=false,state.users=action.payload,state.error=''})
        builder.addCase(fetchUsers.rejected ,(state,action) => {state.loading=false,state.users=[],state.error=action.error.message})
        
    }
})

export default UserSlice.reducer