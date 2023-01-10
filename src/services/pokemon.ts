import { emptyPokemonApi } from './pokemon-api';

const apiWithTag = emptyPokemonApi.enhanceEndpoints({ addTagTypes: ['pokemons'] });

export const pokemonApi = apiWithTag.injectEndpoints({
  endpoints: build => ({
    getPokemonByName: build.query({ query: (name: string) => ({ url: `pokemon/${name}`, method: 'get' }) }),
    mutation: build.mutation({
      query: () => ({ url: '/mutation', method: 'post' }),
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
