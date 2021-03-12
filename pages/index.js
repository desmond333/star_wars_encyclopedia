import Head from 'next/head';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import styles from './Index.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Star Wars Encyclopedia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main />

      <Footer />
    </div>
  );
}
