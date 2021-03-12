import styles from './Modal.module.scss';

export default function Modal(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__card}>
        <div className={styles.modal__close} onClick={props.closeModalCard}></div>
        <div className={styles.modal__inner}>
          <div className={styles.modal__header}>effeef</div>
          <div className={styles.modal__border}>effefe</div>
          <div className={styles.modal__footer}>feef</div>
        </div>
      </div>
    </div>
  );
}
