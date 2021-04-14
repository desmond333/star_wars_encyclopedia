import React from 'react';

import styles from './Main.module.scss';

import Cardspace from './Cardspace/Cardspace';
import Searcher from './Searcher/Searcher';

const Main = ({ appBodyRef }) => {
  return (
    <main className={styles.main}>
      <Searcher />

      <Cardspace appBodyRef={appBodyRef} />
    </main>
  );
};

export default Main;
