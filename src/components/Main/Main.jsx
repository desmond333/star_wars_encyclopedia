import React, { useState, useRef, useEffect } from 'react';

import styles from './Main.module.scss';

import Cardspace from './Cardspace/Cardspace';
import Searcher from './Searcher/Searcher';

export default function Main(props) {
  return (
    <main className={styles.main}>
      <Searcher state={props.state}/>
      <Cardspace stateData={props.stateData} appBodyRef={props.appBodyRef}/>
    </main>
  );
}
