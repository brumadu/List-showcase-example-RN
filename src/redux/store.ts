import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducer';

export const store = configureStore(
    {
        reducer: {userReducer},
    }
)

export type RootState = ReturnType<typeof userReducer>
export type AppDispatch = typeof store.dispatch

export default store;