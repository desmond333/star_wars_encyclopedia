import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Searcher.module.scss';

import { setIsSearching } from '../../../store/action_creators/peopleAC';
import { loadPeopleBySearchValueThunk } from '../../../store/thunk_creators/loadPeopleBySearchValue';

export default function Searcher() {
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

  const onChangeInput = (e) => {
    const { value } = e.target; //деструктуризация
    if (value != '') {
      dispatch(setIsSearching(true));
      dispatch(loadPeopleBySearchValueThunk(value, allPlanets, allSpecies, allFilms));
    } else {
      dispatch(setIsSearching(false));
    }
    console.log(value);
  };

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
