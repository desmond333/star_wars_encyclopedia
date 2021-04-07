import Head from 'next/head';

import { store } from '../src/store/store';
import { Provider } from 'react-redux';
import { AppWrapper, Loader } from '../src/components/index';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Star Wars Encyclopedia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <AppWrapper />
        <Loader />
      </Provider>
    </div>
  );
}
