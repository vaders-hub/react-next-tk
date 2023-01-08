import * as React from 'react';

import MainLayout from 'src/layouts/main';
import { useGetPokemonByNameQuery } from 'src/services/pokemon';

const HomePage = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  return (
    <>
      <div>home</div>
      <div className='App'>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        ) : null}
      </div>
    </>
  );
};
HomePage.Layout = MainLayout;

export default HomePage;
