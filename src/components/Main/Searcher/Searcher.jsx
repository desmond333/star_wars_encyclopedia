import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Searcher.module.scss';

import { setIsSearching } from '../../../store/action_creators/people';
import { loadPeopleBySearchValueThunk } from '../../../store/thunk_creators/index';
import { debounce } from '../../../store/utils/debounce';
import Sel from '../../../store/selectors/selectors';

const Searcher = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const isLoading = Sel.getIsLoading(state);
  const nextPlanetsPageId = Sel.getNextPlanetsPageId(state);
  const nextSpeciesPageId = Sel.getNextSpeciesPageId(state);
  const nextFilmsPageId = Sel.getNextFilmsPageId(state);

  //загрузились ли вторичные данные
  const [isSecondaryDataUploaded, setIsSecondaryDataUploaded] = useState(false);
  useEffect(() => {
    if (
      nextPlanetsPageId == undefined &&
      nextSpeciesPageId == undefined &&
      nextFilmsPageId == undefined
    ) {
      setIsSecondaryDataUploaded(true);
    }
  }, [nextPlanetsPageId, nextSpeciesPageId, nextFilmsPageId]);

  //Обнуляем значение в input при перезагрузке страницы
  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current != undefined) {
      inputRef.current.value = '';
    }
  }, []);

  let onChangeInput = (e) => {
    const { value } = e.target; //деструктуризация
    if (value != '' && isSecondaryDataUploaded != false) {
      dispatch(setIsSearching(true));
      // получать доступ к  allPlanets, allSpecies, allFilms уже внутри loadPeopleBySearchValueThunk а не передавая туда аргументы отсюда
      dispatch(loadPeopleBySearchValueThunk(value));
    } else {
      dispatch(setIsSearching(false));
    }
  };

  onChangeInput = debounce(onChangeInput, 500, false);

  return (
    <div className={styles.search}>
      {!isLoading && (
        <form className={styles.form}>
          <div className={styles.form__group}>
            <input
              className={styles.form__control}
              onChange={onChangeInput}
              placeholder="Search by name"
              data-autoresize
              ref={inputRef}></input>
            <span className={styles.form__line}></span>
            <button className={styles.form__button} type="submit"></button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Searcher;
