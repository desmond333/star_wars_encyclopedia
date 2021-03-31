// всегда импорти во всех js компонентах React
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Cardspace.module.scss';
import Card from './Card/Card';
import { loadPeopleByPageIdThunk } from '../../../store/thunk_creators/loadPeopleByPageIdThunk';
import { loadPlanetsByPageIdThunk } from '../../../store/thunk_creators/loadPlanetsByPageIdThunk';

const Cardspace = ({ appBodyRef }) => {
  const dispatch = useDispatch();

  const peopleData = useSelector((state) => state.people.allPeople);
  const nextPeoplePageId = useSelector((state) => state.people.nextPageId);
  const nextPlanetsPageId = useSelector((state) => state.planets.nextPageId);
  const isLoading = useSelector((state) => state.people.isLoading);
  const hasMore = useSelector((state) => state.people.hasMore);

  useEffect(() => {
    dispatch(loadPeopleByPageIdThunk(nextPeoplePageId));
  }, []);

  //подгружаем все планеты в редюсер
  const [planetsPageIDCounter, setplanetsPageIDCounter] = useState(1);
  if (nextPlanetsPageId == planetsPageIDCounter) {
    dispatch(loadPlanetsByPageIdThunk(nextPlanetsPageId));
    setplanetsPageIDCounter(Number(nextPlanetsPageId) + 1);
  }

  const loadPeople = () => {
    if (isLoading) {
      return;
    }
    dispatch(loadPeopleByPageIdThunk(nextPeoplePageId));
  };

  const miniLoader = () => {
    return(
      <div>
grrgrggr
      </div>
    )
  }

  return (
    <div className={styles.cards}>
      <div className={styles.cards__container}>
        <ul className={styles.cards__list}>
          <InfiniteScroll
            className={styles.cards__infiniteScroll}
            style={{ overflow: 'visible' }}
            dataLength={peopleData.length}
            // next={loadPeople}
            hasMore={hasMore}
            loader={<div className={styles.miniLoader}>Loading...</div>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }>
            {peopleData.map((man, index) => (
              <Card key={`${man}_${index}`} man={man} appBodyRef={appBodyRef} />
            ))}
          </InfiniteScroll>
        </ul>
      </div>
    </div>
  );
};

export default Cardspace;
