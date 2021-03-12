import styles from './Search.module.scss';

export default function Search() {
  return (
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
  );
}
