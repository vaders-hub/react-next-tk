import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from 'src/configs/common/axios';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/',
  }),
  endpoints: build => ({
    getPokemonByName: build.query({ query: (name: string) => ({ url: `pokemon/${name}`, method: 'get' }) }),
    mutation: build.mutation({
      query: () => ({ url: '/mutation', method: 'post' }),
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
