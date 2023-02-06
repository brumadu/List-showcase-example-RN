import { Dispatch } from "redux";
import types from './types/actionsTypes'

export const loadRepo = (repo: any) => ({
        type: types.LOAD_USER_REPO_SAGA,
        payload: repo,
});

export const setSearch = (search: any) => (dispatch: Dispatch) => {
    dispatch({
        type: types.SET_USER_SEARCH,
        payload: search,
    });
};



