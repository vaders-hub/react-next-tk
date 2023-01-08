import { FC, Fragment } from 'react';
import { store } from 'src/store';
import { Provider } from 'react-redux';

import type { NextComponentType } from 'next';
import type { AppProps } from 'next/app';

type CustomNextComponent = NextComponentType & { Layout?: FC };
type CustomAppProps = AppProps & { Component: CustomNextComponent };

const MyApp = ({ Component, pageProps }: CustomAppProps) => {
  const Layout: CustomNextComponent | typeof Fragment = Component.Layout ? Component.Layout : Fragment;
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};
export default MyApp;
