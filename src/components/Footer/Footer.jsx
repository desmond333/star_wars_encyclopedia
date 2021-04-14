import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__title} id="cardsLoading">
        STAR WARS CHARACTER ENCYCLOPEDIA, 2021
      </div>
    </footer>
  );
};

export default Footer;
