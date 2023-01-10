import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from 'src/configs/common/axios';

export const emptyMemberApi = createApi({
  reducerPath: 'member',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://localhost:7443/rest/v1.0/',
  }),
  endpoints: () => ({}),
});
