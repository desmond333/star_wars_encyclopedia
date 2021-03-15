import React, { useState, useRef, useEffect } from 'react';

import styles from './AppBody.module.scss';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

export default function AppBody() {
  //с помощью хука useRef создаем ссылку на div card
  const appBodyRef = useRef();

  return (
    <div className={styles.container} ref={appBodyRef}>
      <Header />

      <Main appBodyRef={appBodyRef} />

      <Footer />
    </div>
  );
}
