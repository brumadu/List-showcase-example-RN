import { SET_USER_REPO, SET_USER_SEARCH, SET_USER_URI, SET_USER_NAME } from "./actions";

const initialState = {
    repo: '',
    uri: '',
    search: 'hub',
    name: '',
}

export function userReducer(state= initialState, action) {
    switch (action.type) { 
        case SET_USER_REPO:
            return {...state, repo: action.payload}
        case SET_USER_URI:
            return {...state, uri: action.payload}
        case SET_USER_SEARCH:
            return {...state, search: action.payload}
        case SET_USER_NAME:
            return {...state, name: action.payload}
        default:
            return state;
        }
}

export default userReducer;