import styles from './Header.module.scss';

export const Header = () => {
  return(
    <header className={styles.header}>
        <div className={styles.header__body}>
          <div className={styles.header__title}>
            <div className={styles.header__titleHeader}></div>
            <div className={styles.header__titleMiddle}>CHARACTER ENCYCLOPEDIA</div>
            <div className={styles.header__titleFooter}></div>
          </div>
        </div>
      </header>
  )
}