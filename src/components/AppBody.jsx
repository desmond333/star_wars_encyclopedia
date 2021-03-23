import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { dataHasBeenUploadedCreator } from '../store/actions/dataHasBeenUploaded';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import * as axios from 'axios'; //импортируем всё, упаковывая это в объект axios

export default function AppBody() {
  //с помощью хука useRef создаем ссылку на контейнер всего приложения
  const appBodyRef = useRef();
  let state = useSelector((state) => state.cardsData);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getCreatures() {
      axios.get('https://swapi.dev/api/people/').then((response) => {
        //делаем get запрос
        //когда сервер даст ответ, затем выполним анонимную стрелочную функцию, в качестве ответа от сервера придет response
        dispatch(dataHasBeenUploadedCreator(response.data));
        return response.data;
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
