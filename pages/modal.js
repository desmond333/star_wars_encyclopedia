import Head from 'next/head';

import { Modal } from './components/Main/Modal/Modal';

import styles from './Index.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Star Wars Encyclopedia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal/>
    </div>
  );
}