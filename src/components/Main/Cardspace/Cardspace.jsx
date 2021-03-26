import InfiniteScroll from 'react-infinite-scroll-component';

import styles from './Cardspace.module.scss';

import Card from './Card/Card';
import { dataHasBeenUploadedThunkCreator } from '../../../store/thunk_creators/dataHasBeenUploadedThunkCreator';

export default function Cardspace(props) {
  const stateData = props.stateData;
  return (
    <div className={styles.cards}>
      <div className={styles.cards__container}>
        <ul className={styles.cards__list}>
          <InfiniteScroll
            className={styles.cards__infiniteScroll}
            dataLength={stateData.count}
            // next={dataHasBeenUploadedThunkCreator(stateData.next)}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }>
            {stateData.results.map((man, index) => (
              <Card key={`${man}_${index}`} man={man} appBodyRef={props.appBodyRef} />
            ))}
          </InfiniteScroll>
        </ul>
      </div>
    </div>
  );
}
