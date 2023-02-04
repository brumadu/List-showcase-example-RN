export const SET_USER_REPO = 'SET_USER_REPO'
export const SET_USER_URI = 'SET_USER_URI'
import { Dispatch } from "redux";

export const setRepo = (repo: any) => (dispatch: Dispatch) => {
    dispatch({
        type: SET_USER_REPO,
        payload: repo,
    });
};

export const setUri = (uri: any) => (dispatch: Dispatch) =>{
    dispatch({
        type: SET_USER_URI,
        payload: uri,
    });
};

