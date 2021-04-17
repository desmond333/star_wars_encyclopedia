import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import styles from './Footer.module.scss';

import Sel from '../../store/selectors/selectors';

const Footer = () => {
  const footerTitleRef = useRef();

  const state = useSelector((state) => state);
  const hasMore = Sel.getHasMore(state);
  const isLoadingSearch = Sel.getIsLoadingSearch(state);
  const isSearching = Sel.getIsSearching(state);

  //убираем анимацию когда все карточки будут загружены
  useEffect(() => {
    if (!hasMore) {
      footerTitleRef.current.style.animation = 'none';
    } 
  }, [hasMore]);

  //ставим анимацию на паузу когда при поиске загрузился ответ от сервера
  useEffect(() => {
    if (!isLoadingSearch && isSearching) {
      footerTitleRef.current.style.animationPlayState = 'paused';
    } else {
      footerTitleRef.current.style.animationPlayState = 'running';
    }
  }, [isLoadingSearch, isSearching]);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__title} ref={footerTitleRef}>
        STAR WARS CHARACTER ENCYCLOPEDIA, 2021
      </div>
    </footer>
  );
};

export default Footer;
