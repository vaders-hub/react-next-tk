import { emptyMemberApi } from './member-api';

const apiWithTag = emptyMemberApi.enhanceEndpoints({ addTagTypes: ['MemberInfo'] });

export const memberApi = apiWithTag.injectEndpoints({
  endpoints: build => ({
    getMemberInfo: build.query({ query: () => ({ url: 'public/members', method: 'get' }) }),
    mutation: build.mutation({
      query: () => ({ url: '/mutation', method: 'post' }),
    }),
  }),
});

export const { useGetMemberInfoQuery } = memberApi;
