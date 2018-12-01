import { LOGIN, LOGOUT } from "../actions/loginActions";

const initialState = {
    login: false
}

export default function loginActions(state = {...initialState}, action){
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                login: true
            }    
            break;
        case LOGOUT:
            return {
                ...initialState
            }
            break;

        default:
            return state;
    }
    return state;
}