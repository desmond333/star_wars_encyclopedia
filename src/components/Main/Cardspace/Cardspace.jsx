import styles from './Cardspace.module.scss';

import Card from './Card/Card';

export default function Cardspace(props) {
  let creatures = props.state.results;

  const getRandomInteger = (min, max) => {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };
  const cardsQuantity = getRandomInteger(1, 10);
  let cards = creatures
    .filter((elem, index) => index < cardsQuantity)
    .map((creature, index) => (
      <Card key={`${creature}_${index}`} creature={creature} appBodyRef={props.appBodyRef} />
    ));
  return (
    <div className={styles.cards}>
      <div className={styles.cards__container}>
        <div className={styles.cards__quantity}>Количество карточек, загруженных с сервера в этот раз = {cardsQuantity} шт</div>
        <ul className={styles.cards__list}>{cards}</ul>
      </div>
    </div>
  );
}
