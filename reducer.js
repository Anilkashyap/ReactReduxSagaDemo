import { GET_USERS_SUCCESS } from "./action";

const initialState = {
    users: []
}

const AppReducer =(state = initialState, action) =>{
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return { ...state, users: action.users }
        default:
            return state
    }
}
export default AppReducer;