import React, { useState, useRef, useEffect } from 'react';

import styles from './Main.module.scss';

import Cardspace from './Cardspace/Cardspace';
import Search from './Search/Search';

export default function Main(props) {
  return (
    <main className={styles.main}>
      <Search state={props.state}/>
      <Cardspace state={props.state} appBodyRef={props.appBodyRef}/>
    </main>
  );
}
