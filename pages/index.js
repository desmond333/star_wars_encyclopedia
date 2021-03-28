import Head from 'next/head';

import AppWrapper from '../src/components/AppWrapper/AppWrapper';

import { store } from '../src/store/store';
import { Provider } from 'react-redux';
import LoaderContainer from '../src/components/Loader/LoaderContainer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Star Wars Encyclopedia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <AppWrapper />
        <LoaderContainer />
      </Provider>
    </div>
  );
}
