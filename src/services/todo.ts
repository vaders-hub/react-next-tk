import { emptyTodoApi } from './todo-api';

const apiWithTag = emptyTodoApi.enhanceEndpoints({ addTagTypes: ['TodoInfo'] });

export const todoApi = apiWithTag.injectEndpoints({
  endpoints: build => ({
    getMemberInfo: build.query({ query: () => ({ url: 'todos/1', method: 'get' }) }),
    mutation: build.mutation({
      query: () => ({ url: '/mutation', method: 'post' }),
    }),
  }),
});

export const { useGetMemberInfoQuery } = todoApi;
