import React, { useState } from 'react';

import styles from './Card.module.scss';

import Modal from './Modal';

export default function Card() {
  const [modalIsOpen, setModalState] = useState(false);

  const openModalCard = () => {
    setModalState(true);
  };
  const closeModalCard = () => {
    setModalState(false);
  };
  return (
    <div>
      <li className={styles.card} onClick={openModalCard}>
        <div className={styles.card__hero}>
          <div className={styles.card__heroAvatar}>A</div>
          <p className={styles.card__heroName}>name</p>
          <p className={styles.card__heroGender}>gender</p>
        </div>
      </li>
      {modalIsOpen && <Modal closeModalCard={closeModalCard} />}
    </div>
  );
}
