import Head from 'next/head';

import AppBody from '../src/components/AppBody';

import { store } from '../src/store/store';
import { Provider } from 'react-redux';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Star Wars Encyclopedia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <AppBody />
      </Provider>
    </div>
  );
}
