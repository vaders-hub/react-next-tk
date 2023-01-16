import { wrapper } from 'src/configs/store';
import { reset } from 'src/features/counter/counterSlice';
import Image from 'next/image';

import MainLayout from 'src/layouts/main';
import { useGetPokemonByNameQuery } from 'src/services/pokemon';

const HomePage = () => {
  // const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  return (
    <>
      <div>home</div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
  // store.dispatch(reset());
  return {
    props: {},
  };
});

HomePage.Layout = MainLayout;

export default HomePage;
