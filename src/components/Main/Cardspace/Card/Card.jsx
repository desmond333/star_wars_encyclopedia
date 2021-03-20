import React, { useState, useRef, useEffect } from 'react';

import styles from './Card.module.scss';

import Modal from '../Modal';

export default function Card(props) {
  //с помощью хука useState создаем локальный стейт для открытия модального окна
  const [open, setOpen] = useState(false);

  //с помощью хука useState создаем локальный стейт для открытия модального окна
  const [finalСolorValue, setFinalСolorValue] = useState('#555555');

  //с помощью хука useRef создаем ссылку на div card
  const cardIconRef = useRef();

  const heroNameRef = useRef();

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
    setOpen(true);
  };

  return (
    <div>
      <li className={styles.card} onClick={onModalOpen}>
        <div className={styles.card__hero}>
          <div className={styles.card__heroAvatar}>
            <div className={styles.card__heroIcon} ref={cardIconRef}>
              {props.creature.name[0]}
            </div>
          </div>
          <p className={styles.card__heroName} ref={heroNameRef}>{props.creature.name}</p>
          <p className={styles.card__heroGender}>{props.creature.gender}</p>
        </div>
      </li>
      <Modal
        isOpen={open}
        setOpen={setOpen}
        finalСolorValue={finalСolorValue}
        creature={props.creature}
        appBodyRef={props.appBodyRef}
        filmsList={['Never give up', 'Van Helsing', 'Flipped']}
      />
    </div>
  );
}
