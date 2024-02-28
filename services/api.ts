import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoggedInUser } from '../types/user';

// Define a service using a base URL and expected endpoints
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:5500/mock/service/' }),
    endpoints: builder => ({
        getUserInfo: builder.query<LoggedInUser, string>({
            query: id => `user/${id}.json`,
        }),
    }),
});

export const { useGetUserInfoQuery } = api;
