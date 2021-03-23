import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { dataHasBeenUploadedAsyncAC } from '../../store/actions/dataHasBeenUploadedAsyncAC';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

export default function AppWrapper() {
  //с помощью хука useRef создаем ссылку на контейнер всего приложения
  const appBodyRef = useRef();
  let state = useSelector((state) => state.cardsData);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getCreatures() {
      fetch('https://swapi.dev/api/people/')
        .then((response) => response.json())
        .then((data) => {
          //делаем get запрос
          dispatch(dataHasBeenUploadedAsyncAC(data));
          return data;
        });
    }
    getCreatures();
  }, []);

  return (
    <div className="appbody" ref={appBodyRef}>
      <Header />

      <Main state={state} appBodyRef={appBodyRef} />

      <Footer />
    </div>
  );
}
