import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import { api } from '../services/api';

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        user: userReducer,
        // Adding the api middleware enables caching, invalidation, polling,
        // and other useful features of `rtk-query`.
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
