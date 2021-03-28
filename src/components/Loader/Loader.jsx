import styles from './Loader.module.scss';

export default function Loader(props) {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__area}>
        <div className={styles.loader__icon}></div>
      </div>
    </div>
  );
}
