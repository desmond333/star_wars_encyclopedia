import React from 'react';

import styles from './Loader.module.scss';

const Loader = (props) => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__area}>
        <div className={styles.loader__icon}></div>
      </div>
    </div>
  );
};

export default Loader;
