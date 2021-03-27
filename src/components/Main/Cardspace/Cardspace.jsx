import InfiniteScroll from 'react-infinite-scroll-component';

import styles from './Cardspace.module.scss';

import Card from './Card/Card';
import { dataUploadedThunkCreator } from '../../../store/thunk_creators/dataUploadedThunk';

export default function Cardspace(props) {
  const peopleData = props.peopleData;
  return (
    <div className={styles.cards}>
      <div className={styles.cards__container}>
        <ul className={styles.cards__list}>
          <InfiniteScroll
            className={styles.cards__infiniteScroll}
            dataLength={peopleData.count}
            // next={dataUploadedThunkCreator(peopleData.next)}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }>
            {peopleData.results.map((man, index) => (
              <Card key={`${man}_${index}`} man={man} appBodyRef={props.appBodyRef} />
            ))}
          </InfiniteScroll>
        </ul>
      </div>
    </div>
  );
}
