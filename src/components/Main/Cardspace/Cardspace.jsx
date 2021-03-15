import styles from './Cardspace.module.scss';

import Card from './Card/Card';

export default function Cardspace(props) {
  const randomInteger = (min, max) => {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };
  let cardspaceElements = [];
  for (let index = 0; index < randomInteger(1, 20); index++) {
    cardspaceElements[index] += 'Card';
  }
  let mapCardspaceElements = cardspaceElements.map((card, index) => (
    <Card key={`${card}_${index}`} appBodyRef = {props.appBodyRef}/>
  ));
  return (
    <div className={styles.cards}>
      <div className={styles.cards__container}>
        <ul className={styles.cards__list}>{mapCardspaceElements}</ul>
      </div>
    </div>
  );
}
