import React, { useState, useRef, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'

import store from '../store/store';
import { dataHasBeenUploadedCreator } from '../store/actions/dataHasBeenUploaded';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import * as axios from 'axios'; //импортируем всё, упаковывая это в объект axios

export default function AppBody() {
  //с помощью хука useRef создаем ссылку на контейнер всего приложения
  const appBodyRef = useRef();
  const state = useSelector(state => state.cardsData);
  const dispatch = useDispatch();
  dispatch(dataHasBeenUploadedCreator({results: [{name: 'grgrrg'}]}));

  
  // (async function getCreatures() {
  //   axios.get('https://swapi.dev/api/people/').then((response) => {
  //     //делаем get запрос
  //     //когда сервер даст ответ, затем выполним анонимную стрелочную функцию, в качестве ответа от сервера придет response
  //     console.log(store.getState())
  //     dispatch(dataHasBeenUploadedCreator(response.data));
  //     console.log(store.getState())
  //     return response.data;
  //   });
  // })();
  return (
    <div className="appbody" ref={appBodyRef}>
      <Header />

      <Main state={state} appBodyRef={appBodyRef} />

      <Footer />
    </div>
  );
}
