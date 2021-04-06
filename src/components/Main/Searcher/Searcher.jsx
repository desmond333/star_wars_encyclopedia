import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Searcher.module.scss';

import { setIsSearching } from '../../../store/action_creators/peopleAC';
import { loadPeopleBySearchValueThunk } from '../../../store/thunk_creators/loadPeopleBySearchValue';

export default function Searcher() {
  //загрузились ли вторичные данные
  const [stateAllSecondaryData, setStateAllSecondaryData] = useState(false);

  const dispatch = useDispatch();

  //planetsRr
  const allPlanets = useSelector((state) => {
    if (state.planets.hasMore == false) {
      return state.planets.allPlanets;
    }
    return;
  });

  //speciesRr
  const allSpecies = useSelector((state) => {
    if (state.species.hasMore == false) {
      return state.species.allSpecies;
    }
    return;
  });

  //filmsRr
  const allFilms = useSelector((state) => {
    if (state.films.hasMore == false) {
      return state.films.allFilms;
    }
    return;
  });

  useEffect(() => {
    if (allPlanets != undefined && allSpecies != undefined && allFilms != undefined) {
      setStateAllSecondaryData(true);
    }
  }, [allPlanets, allSpecies, allFilms]);

  let onChangeInput = (e) => {
    const { value } = e.target; //деструктуризация
    if (value != '' && stateAllSecondaryData != false) {
      dispatch(setIsSearching(true));
      dispatch(loadPeopleBySearchValueThunk(value, allPlanets, allSpecies, allFilms));
    } else {
      dispatch(setIsSearching(false));
    }
    console.log(value);
  };

  onChangeInput = debounce(onChangeInput, 500, false);

  //debounce
  function debounce(func, wait, immediate) {
    let timeout;

    // Эта функция выполняется, когда событие DOM вызвано.
    return function executedFunction() {
      // Сохраняем контекст this и любые параметры,
      // переданные в executedFunction.
      const context = this;
      const args = arguments;

      // Функция, вызываемая по истечению времени debounce.
      const later = function () {
        // Нулевой timeout, чтобы указать, что debounce закончилась.
        timeout = null;

        // Вызываем функцию, если immediate !== true,
        // то есть, мы вызываем функцию в конце, после wait времени.
        if (!immediate) func.apply(context, args);
      };

      // Определяем, следует ли нам вызывать функцию в начале.
      const callNow = immediate && !timeout;

      // clearTimeout сбрасывает ожидание при каждом выполнении функции.
      // Это шаг, который предотвращает выполнение функции.
      clearTimeout(timeout);

      // Перезапускаем период ожидания debounce.
      // setTimeout возвращает истинное значение / truthy value
      // (оно отличается в web и node)
      timeout = setTimeout(later, wait);

      // Вызываем функцию в начале, если immediate === true
      if (callNow) func.apply(context, args);
    };
  }

  return (
    <div className={styles.search}>
      <form className={styles.form}>
        <div className={styles.form__group}>
          <input
            className={styles.form__control}
            onChange={onChangeInput}
            placeholder="Search by name"
            data-autoresize></input>
          <span className={styles.form__line}></span>
          <button
            className={styles.form__button}
            type="submit"
            onClick={() => {
              console.log(searchQuery);
            }}></button>
        </div>
      </form>
    </div>
  );
}
