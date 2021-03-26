import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  dataHasBeenUploadedThunkCreator,
  secondDataHasBeenUploadedThunkCreator,
} from '../../store/thunk_creators/dataHasBeenUploadedThunkCreator';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

export default function AppWrapper() {
  //с помощью хука useRef создаем ссылку на контейнер всего приложения
  const appBodyRef = useRef();
  const state = useSelector((state) => state.cardsData);
  console.log(state.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(secondDataHasBeenUploadedThunkCreator());
  }, []);

  return (
    <div className="appbody" ref={appBodyRef}>
      <Header />

      <Main stateData={state.data} appBodyRef={appBodyRef} />

      <Footer />
    </div>
  );
}
