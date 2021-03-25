import ReactDOM from 'react-dom';
import React, { useState, useRef, useEffect } from 'react';

import styles from './ModalArea.module.scss';

export default function ModalArea(props) {
  //модальное окно откроется только если isOpen будет true
  if (!props.isOpen) return null;

  //с помощью f создаем div с вложенным в него элементом массива filmsList
  const filmsElementsRender = () => {
    let filmsElements = 'No films';
    if (props.filmsList.length > 0) {
      filmsElements = props.filmsList.map((name, index) => (
        <div className={styles.footer__itemValueFilm} key={`${name}_${index}`}>
          {name}
        </div>
      ));
    }
    return filmsElements;
  };

  //с помощью хука useEffect выполняем функцию во время первой отрисовки
  useEffect(() => {
    setRandBackgColor();
  }, []);

  //с помощью хука useRef создаем ссылку на div modal__headerAvatar
  const avatarRef = useRef();

  //устанавливаем случайный цвет фону аватарки
  const setRandBackgColor = () => {
    avatarRef.current.style.backgroundColor = props.finalСolorValue;
  };

  //убираем классы у appBody и body при закрытии карточки
  const onModalAreaClose = () => {
    props.appBodyRef.current.classList.remove('blur');
    document.querySelector('body').classList.remove('noScroll');
    props.setOpen(false);
  };

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modal__card}>
        <div className={styles.modal__close} onClick={onModalAreaClose}></div>
        <div className={styles.modal__inner}>
          <div className={styles.modal__header}>
            <div className={styles.modal__headerAvatar} ref={avatarRef}>
              {props.creature.name[0]}
            </div>
            <div className={styles.modal__headerName}>{props.creature.name}</div>
            <div className={styles.modal__headerBackground}></div>
          </div>
          <div className={styles.modal__middle}>
            <span className={styles.modal__middleBorder}></span>
          </div>
          <div className={styles.modal__footer}>
            <div className={styles.footer__item}>
              <div className={styles.footer__itemIcon}></div>
              <div className={styles.footer__itemText}>Birth Year</div>
              <div className={styles.footer__itemValue}>{props.creature.birth_year}</div>
            </div>
            <div className={styles.footer__item}>
              <div className={styles.footer__itemIcon}></div>
              <div className={styles.footer__itemText}>Species</div>
              <div className={styles.footer__itemValue}>{props.creature.species}</div>
            </div>
            <div className={styles.footer__item}>
              <div className={styles.footer__itemIcon}></div>
              <div className={styles.footer__itemText}>Gender</div>
              <div className={styles.footer__itemValue}>{props.creature.gender}</div>
            </div>
            <div className={styles.footer__item}>
              <div className={styles.footer__itemIcon}></div>
              <div className={styles.footer__itemText}>Homeworld</div>
              <div className={styles.footer__itemValue}>Earth</div>
            </div>
            <div className={styles.footer__item}>
              <div className={styles.footer__itemIcon}></div>
              <div className={styles.footer__itemText}>Films</div>
              <div className={styles.footer__itemValue}>{filmsElementsRender()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
