import Head from 'next/head';

import AppBody from '../src/components/AppBody';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Star Wars Encyclopedia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBody/>
    </div>
  );
}
