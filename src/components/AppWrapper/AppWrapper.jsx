import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { dataHasBeenUploadedThunkCreator } from '../../store/thunk_creators/dataHasBeenUploadedThunkCreator';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

export default function AppWrapper() {
  //с помощью хука useRef создаем ссылку на контейнер всего приложения
  const appBodyRef = useRef();
  const state = useSelector((state) => state.cardsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataHasBeenUploadedThunkCreator('data'));
  }, []);

  return (
    <div className="appbody" ref={appBodyRef}>
      <Header />

      <Main state={state} appBodyRef={appBodyRef} />

      <Footer />
    </div>
  );
}
