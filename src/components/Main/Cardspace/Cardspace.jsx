// всегда импорти во всех js компонентах React
import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Cardspace.module.scss';
import Card from './Card/Card';
import { loadPeopleByPageIdThunk } from '../../../store/thunk_creators/loadPeopleByPageIdThunk';

 const Cardspace = ({ appBodyRef }) => {
  const dispatch = useDispatch();

  const peopleData = useSelector((state) => state.people.allPeople);
  const nextPageId = useSelector((state) => state.people.nextPageId);
  const isLoading = useSelector((state) => state.people.isLoading);
  const hasMore = useSelector((state) => state.people.hasMore);

  useEffect(() => {
    dispatch(loadPeopleByPageIdThunk(nextPageId));
  }, []);

  const loadPeople = () => {
    if (isLoading) {
      return;
    }

    dispatch(loadPeopleByPageIdThunk(nextPageId));
  };

  return (
    <div className={styles.cards}>
      <div className={styles.cards__container}>
        <ul className={styles.cards__list}>
          <InfiniteScroll
            className={styles.cards__infiniteScroll}
            dataLength={peopleData.length}
            next={loadPeople}
            hasMore={hasMore}
            loader={null}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {peopleData.map((man, index) => (
              <Card
                key={`${man}_${index}`}
                man={man}
                appBodyRef={appBodyRef}
              />
            ))}
          </InfiniteScroll>
        </ul>
      </div>
    </div>
  );
}

export default Cardspace;
