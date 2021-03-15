import React, { useState, useRef, useEffect } from 'react';

import styles from './Card.module.scss';

import Modal from '../Modal';

export default function Card(props) {
  //с помощью хука useState создаем локальный стейт для открытия модального окна
  const [open, setOpen] = useState(false);

  //с помощью хука useState создаем локальный стейт для открытия модального окна
  const [finalСolorValue, setFinalСolorValue] = useState('#555555');

  //с помощью хука useEffect во время первой отрисовки сохраняем итоговый цвет и устанавливаем его для фона аватарки
  useEffect(() => {
    const temporaryСolorValue = getRandBackgColor();
    setFinalСolorValue(temporaryСolorValue);
    cardAvatarRef.current.style.backgroundColor = temporaryСolorValue;
  }, []);

  //с помощью хука useRef создаем ссылку на div card
  const cardAvatarRef = useRef();
  
  //получаем случайный цвет
  const getRandBackgColor = () => {
    let letters = '0123456789ABCDEF';
    let backgColor = '#';
    for (let i = 0; i < 6; i++) {
      backgColor += letters[Math.floor(Math.random() * 16)];
    }
    return backgColor;
  };

  return (
    <div>
      <li
        className={styles.card}
        onClick={() => {
          props.appBodyRef.current.classList.add('blur');
          setOpen(true);
        }}>
        <div className={styles.card__hero}>
          <div className={styles.card__heroAvatar} ref={cardAvatarRef}>
            A
          </div>
          <p className={styles.card__heroName}>name</p>
          <p className={styles.card__heroGender}>gender</p>
        </div>
      </li>
      <Modal
        message="Hello World!"
        isOpen={open}
        onClose={() => setOpen(false)}
        finalСolorValue={finalСolorValue}
        nameFirstLetter={'S'}
        filmsList={['Never give up', 'Van Helsing', 'Flipped']}
      />
    </div>
  );
}
