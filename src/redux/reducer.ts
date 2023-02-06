import types from "./actions/types/actionsTypes";

const initialState = {
    repo: [],
    search: 'hub',
}

export function userReducer(state = initialState, action: any) {
    switch (action.type) {
        case types.SET_USER_REPO:
            return {
                ...state,
                repo: action.payload,
            }
        case types.SET_USER_SEARCH:
            return { 
                ...state, 
                search: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;