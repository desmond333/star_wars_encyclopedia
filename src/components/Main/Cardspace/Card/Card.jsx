import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Card.module.scss';

import ModalArea from '../../../ModalArea/ModalArea';
import { setIsLoaderVisible } from '../../../../store/action_creators/people';

const Card = (props) => {
  //с помощью хука useState создаем локальный стейт для открытия модального окна
  const [open, setOpen] = useState(false);

  //с помощью хука useState создаем локальный стейт для сохранения итогового цвета
  const [finalСolorValue, setFinalСolorValue] = useState('#555555');

  //с помощью хука useRef создаем ссылку на div card
  const cardIconRef = useRef();

  const heroNameRef = useRef();

  const dispatch = useDispatch();

  //с помощью хука useEffect во время первой отрисовки сохраняем итоговый цвет и устанавливаем его для фона аватарки
  useEffect(() => {
    const temporaryСolorValue = getRandBackgColor();
    setFinalСolorValue(temporaryСolorValue);
    cardIconRef.current.style.backgroundColor = temporaryСolorValue;
    heroNameRef.current.style.color = temporaryСolorValue;
  }, []);

  //получаем случайный цвет
  const getRandBackgColor = () => {
    let letters = '0123456789ABCDEF';
    let backgColor = '#';
    for (let i = 0; i < 6; i++) {
      backgColor += letters[Math.floor(Math.random() * 16)];
    }
    return backgColor;
  };

  //добавляем классы нашему appBody и body при открытии карточки
  const onModalOpen = () => {
    props.appBodyRef.current.classList.add('blur');
    document.querySelector('body').classList.add('noScroll');
    dispatch(setIsLoaderVisible(true));
    setTimeout(() => {
      dispatch(setIsLoaderVisible(false));

      setOpen(true);
    }, 2000);
  };

  return (
    <div>
      <li className={styles.card} onClick={onModalOpen}>
        <div className={styles.card__hero}>
          <div className={styles.card__heroAvatar}>
            <div className={styles.card__heroIcon} ref={cardIconRef}>
              {props.man.name[0]}
            </div>
          </div>
          <p className={styles.card__heroName} ref={heroNameRef}>
            {props.man.name}
          </p>
          <p className={styles.card__heroGender}>{props.man.gender}</p>
        </div>
      </li>
      <ModalArea
        isOpen={open}
        setOpen={setOpen}
        finalСolorValue={finalСolorValue}
        appBodyRef={props.appBodyRef}
        name={props.man.name}
        birth_year={props.man.birth_year}
        species={props.man.species[0]}
        gender={props.man.gender}
        homeworld={props.man.homeworld}
        filmsList={props.man.films}
      />
    </div>
  );
};

export default Card;
