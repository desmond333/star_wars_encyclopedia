import ReactDOM from 'react-dom';
import React, { useState, useRef, useEffect } from 'react';

import styles from './Modal.module.scss';

export default function Modal(props) {
  //модальное окно откроется только если isOpen будет true
  if (!props.isOpen) return null;

  //с помощью f создаем div с вложенным в него элементом массива filmsList
  const filmsElementsRender = () => {
    let filmsElements = 'No films';
    if (props.filmsList.length > 0) {
      filmsElements = props.filmsList.map((name, index) => (
        <div className={styles.rightside__itemValueFilm} key={`${name}_${index}`}>
          {name}
        </div>
      ));
    }
    return filmsElements;
  };

  //с помощью хука useRef создаем ссылку на div modal__headerAvatar
  const avatarRef = useRef();

  //устанавливаем случайный цвет фону аватарки
  const setRandBackgColor = () => {
    avatarRef.current.style.backgroundColor = props.finalСolorValue;
  };

  //с помощью хука useEffect выполняем функцию во время первой отрисовки
  useEffect(() => {
    setRandBackgColor();
  }, []);
  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modal__card}>
        <div className={styles.modal__close} onClick={props.onClose}></div>
        <div className={styles.modal__inner}>
          <div className={styles.modal__header}>
            <div className={styles.modal__headerAvatar} ref={avatarRef}>
              {props.nameFirstLetter}
            </div>
            <div className={styles.modal__headerName}>{props.message}</div>
          </div>
          <div className={styles.modal__middle}>
            <span className={styles.modal__middleBorder}></span>
          </div>
          <div className={styles.modal__footer}>
            <div className={styles.footer__leftside}>
              <div className={styles.footer__item}>
                <div className={styles.leftside__itemIconYear}></div>
                <div className={styles.leftside__itemText}>Birth Year</div>
                <div className={styles.leftside__itemValue}>1999</div>
              </div>
              <div className={styles.footer__item}>
                <div className={styles.leftside__itemIconSpecies}></div>
                <div className={styles.leftside__itemText}>Species</div>
                <div className={styles.leftside__itemValue}>People</div>
              </div>
              <div className={styles.footer__item}>
                <div className={styles.leftside__itemIconGender}></div>
                <div className={styles.leftside__itemText}>Gender</div>
                <div className={styles.leftside__itemValue}>Male</div>
              </div>
            </div>
            <div className={styles.footer__rightside}>
              <div className={styles.footer__item}>
                <div className={styles.rightside__itemIconHomeworld}></div>
                <div className={styles.rightside__itemText}>Homeworld</div>
                <div className={styles.rightside__itemValue}>Earth</div>
              </div>
              <div className={styles.footer__item}>
                <div className={styles.rightside__itemIconFilms}></div>
                <div className={styles.rightside__itemText}>Films</div>
                <div className={styles.rightside__itemValue}>{filmsElementsRender()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
