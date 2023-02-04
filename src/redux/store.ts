import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';

export const store = configureStore(
    {
        reducer: {userReducer},
    }
)
export type RootState = ReturnType<typeof userReducer>
export type AppDispatch = typeof store.dispatch

export default store;