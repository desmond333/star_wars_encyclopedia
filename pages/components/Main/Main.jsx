import styles from './Main.module.scss';

import Link from 'next/link';

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.search}>
        <form className={styles.form}>
          <div className={styles.form__group}>
            <input
              className={styles.form__control}
              placeholder="Search by name"
              data-autoresize></input>
            <span className={styles.form__line}></span>
            <button type="submit" className={styles.form__button}></button>
          </div>
        </form>
      </div>
      <div className={styles.cards}>
        <div className={styles.cards__container}>
          <ul className={styles.cards__list}>
            <Link href="/modal">
              <li className={styles.cards__item}>
                <div className={styles.hero}>
                  <div className={styles.hero__avatar}>A</div>
                  <p className={styles.hero__name}>name</p>
                  <p className={styles.hero__gender}>gender</p>
                </div>
              </li>
            </Link>
            <li className={styles.cards__item}>
              <div className={styles.hero}>
                <div className={styles.hero__avatar}>B</div>
                <p className={styles.hero__name}>name</p>
                <p className={styles.hero__gender}>gender</p>
              </div>
            </li>
            <li className={styles.cards__item}>
              <div className={styles.hero}>
                <div className={styles.hero__avatar}>C</div>
                <p className={styles.hero__name}>name</p>
                <p className={styles.hero__gender}>gender</p>
              </div>
            </li>
            <li className={styles.cards__item}>
              <div className={styles.hero}>
                <div className={styles.hero__avatar}>D</div>
                <p className={styles.hero__name}>name</p>
                <p className={styles.hero__gender}>gender</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
