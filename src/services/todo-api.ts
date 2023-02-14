import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from 'src/configs/common/axios';

export const emptyTodoApi = createApi({
  reducerPath: 'todo',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: () => ({}),
});
