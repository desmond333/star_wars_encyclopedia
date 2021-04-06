import React from 'react';

import styles from './Main.module.scss';

import Cardspace from './Cardspace/Cardspace';
import Searcher from './Searcher/Searcher';

export default function Main({ appBodyRef }) {
  return (
    <main className={styles.main}>
      <Searcher />

      <Cardspace appBodyRef={appBodyRef} />
    </main>
  );
}
