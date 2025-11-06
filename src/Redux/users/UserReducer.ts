
import { FETCH_USERS_SUCESS,FETCH_USERS_FAILURE,FETCH_USERS_REQUEST } from "./UserTypes";

interface InitialStateUser {
  loading: boolean;
  users: any[];
  error: string;
}

const initialStateUser: InitialStateUser = {
  loading: false,
  users: [],
  error: "",
};

const UserReducer = (state = initialStateUser, action: any): InitialStateUser => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCESS:
      return { loading: false, users: action.payload, error: "" };
    case FETCH_USERS_FAILURE:
      return { loading: false, users: [], error: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
