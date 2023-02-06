import { all, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects'
import { getRepositories } from '../api/getRepositories'
import types from './actions/types/actionsTypes'

const searchItem = state => state.search
export default function* setUserRepoSaga( ): any {
    const search = yield select( searchItem )
    const response = yield call(getRepositories, search)
    yield put({type: types.SET_USER_REPO, payload: response})
}

export function* userSaga() {
    yield takeEvery(types.SET_USER_SEARCH, setUserRepoSaga);
}

export function* rootSaga() {
    yield all([userSaga()]);
  }