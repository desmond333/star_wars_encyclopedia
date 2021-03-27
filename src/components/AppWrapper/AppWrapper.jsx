import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { dataUploadedThunkCreator } from '../../store/thunk_creators/dataUploadedThunk';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

export default function AppWrapper() {
  //с помощью хука useRef создаем ссылку на контейнер всего приложения
  const appBodyRef = useRef();
  const state = useSelector((state) => state);
  const peoplePageUrl = 'https://swapi.dev/api/people/?page=1';
  const planetsUrl = 'https://swapi.dev/api/planets/1/';

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataUploadedThunkCreator(peoplePageUrl));
  }, []);

  return (
    <div className="appbody" ref={appBodyRef}>
      <Header />

      <Main peopleData={state.people.data} appBodyRef={appBodyRef} />
      <button
        onClick={() => {
          dispatch(dataUploadedThunkCreator(state.people.data.next));
        }}>
        ЗАГРУЗИТЬ ДРУГИЕ КАРТОЧКИ
      </button>
      <Footer />
    </div>
  );
}
