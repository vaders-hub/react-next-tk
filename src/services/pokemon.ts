import { emptyPokemonApi } from './pokemon-api';

const apiWithTag = emptyPokemonApi.enhanceEndpoints({ addTagTypes: ['pokemons'] });

export const pokemonApi = apiWithTag.injectEndpoints({
  endpoints: build => ({
    getPokemonByName: build.query({
      query: (name: string) => ({ url: `pokemon/${name}`, method: 'get' }),
      transformResponse: (response: any) => {
        console.log('transform', response.name);
        return response.name;
      },
    }),
    mutation: build.mutation({
      query: () => ({ url: '/mutation', method: 'post' }),
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
