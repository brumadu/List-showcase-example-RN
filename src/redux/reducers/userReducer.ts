import { SET_USER_REPO, SET_USER_URI } from "../actions/userActions";

const initialState = {
    repo: '',
}

export function userReducer(state= initialState, action) {
    switch (action.type) { 
        case SET_USER_REPO:
            return {...state, repo: action.payload}
        case SET_USER_URI:
            return {...state, uri: action.payload}
        default:
            return state;
        }
}

export default userReducer;