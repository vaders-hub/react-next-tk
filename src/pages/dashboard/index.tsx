import { useEffect } from 'react';
import { store, wrapper } from 'src/configs/store';
import { emptyPokemonApi } from 'src/services/pokemon-api';
import { decrement, increment } from 'src/features/counter/counterSlice';

import AdminLayout from 'src/layouts/admin';
import CounterComp from 'src/components/CounterComp';

const AdminPage = (props: { name: string }) => {
  const { name } = props;
  return (
    <>
      <div>admin {name}</div>
      <CounterComp />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
  const { req, res } = context;

  const { getPokemonByName }: any = emptyPokemonApi.endpoints;
  const {
    data: { name },
  } = await store.dispatch(getPokemonByName.initiate('bulbasaur'));
  await store.dispatch(increment());

  return {
    props: { name },
  };
});

AdminPage.Layout = AdminLayout;
export default AdminPage;
