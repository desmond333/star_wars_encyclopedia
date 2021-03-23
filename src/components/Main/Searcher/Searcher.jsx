import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { onSearchQueryAC } from '../../../store/actions/onSearchQueryAC';

import styles from './Searcher.module.scss';

export default function Searcher() {
  const dispatch = useDispatch();
  const onChangeInput = (e) => {
    const { value } = e.target; //деструктуризация
    onSearch(value);
    //почему первую введенную букву не воспринимают?
    console.log(value);
  };

  const onSearch = (value) => {
    if (value != null) {
      dispatch(onSearchQueryAC(value));
    }
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
