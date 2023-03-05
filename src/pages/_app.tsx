import { FC, Fragment } from 'react';
import { store, wrapper } from 'src/configs/store';
import { Provider } from 'react-redux';

import 'styles/globals.css';
import { darkTheme } from 'theme/themes';
import { ThemeProvider, CssBaseline } from '@mui/material';

import type { NextComponentType } from 'next';
import type { AppProps } from 'next/app';

type CustomNextComponent = NextComponentType & { Layout?: FC };
type CustomAppProps = AppProps & { Component: CustomNextComponent };

const MyApp = ({ Component, ...rest }: CustomAppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  const Layout: CustomNextComponent | typeof Fragment = Component.Layout ? Component.Layout : Fragment;
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
};
export default MyApp;
