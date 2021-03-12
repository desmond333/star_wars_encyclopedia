import styles from './Main.module.scss';

import Card from './Card/Card';
import Search from './Search/Search';

export default function Main() {
  return (
    <main className={styles.main}>
      <Search/>
      <div className={styles.cards}>
        <div className={styles.cards__container}>
          <ul className={styles.cards__list}>
            <Card/>
          </ul>
        </div>
      </div>
    </main>
  );
}
