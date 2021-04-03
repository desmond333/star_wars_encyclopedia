import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Cardspace.module.scss';
import Card from './Card/Card';

import { loadPeopleByPageIdThunk } from '../../../store/thunk_creators/loadPeopleByPageIdThunk';
import { loadPlanetsByPageIdThunk } from '../../../store/thunk_creators/loadPlanetsByPageIdThunk';
import { setHomeworldInPeopleThunk } from '../../../store/thunk_creators/setHomeworldThunk';

const Cardspace = ({ appBodyRef }) => {
  const dispatch = useDispatch();

  const allPeople = useSelector((state) => state.people.allPeople);
  const nextPeoplePageId = useSelector((state) => state.people.nextPageId);

  const allPlanets = useSelector((state) => {
    if (state.planets.hasMore == false) {
      return state.planets.allPlanets;
    }
    return;
  });
  const nextPlanetsPageId = useSelector((state) => state.planets.nextPageId);
  
  const isLoading = useSelector((state) => state.people.isLoading);
  const hasMore = useSelector((state) => state.people.hasMore);

  //добавляем в peopleRr первую страницу людей при первом рендере
  useEffect(() => {
    dispatch(loadPeopleByPageIdThunk(nextPeoplePageId, allPlanets));
  }, []);

  //добавляем в planetsRr все страницы планет сразу после первого рендера
  useEffect(() => {
    //это бесконечный цикл с условием его завершения благодаря зависимости в useEffect от nextPlanetsPageId
    if (nextPlanetsPageId != undefined) {
      dispatch(loadPlanetsByPageIdThunk(nextPlanetsPageId));
    }
    //после загрузки всех планет устанавливаем homeworld первым десяти людям
    else {
      dispatch(setHomeworldInPeopleThunk(allPeople, allPlanets));
    }
  }, [nextPlanetsPageId]);

  //с помощью этой f загружаем следующую страницу с новыми людьми
  const loadPeople = () => {
    if (isLoading) {
      return;
    }
    //в этом thunk только что загруженным людям добавляется homeworld, species, films
    dispatch(loadPeopleByPageIdThunk(nextPeoplePageId, allPlanets));
  };

  return (
    <div className={styles.cards}>
      <div className={styles.cards__container}>
        <ul className={styles.cards__list}>
          <InfiniteScroll
            className={styles.cards__infiniteScroll}
            style={{ overflow: 'visible' }}
            dataLength={allPeople.length}
            next={loadPeople}
            hasMore={hasMore}
            loader={<div className={styles.miniLoader}>Loading...</div>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }>
            {allPeople.map((man, index) => (
              <Card key={`${man}_${index}`} man={man} appBodyRef={appBodyRef} />
            ))}
          </InfiniteScroll>
        </ul>
      </div>
    </div>
  );
};

export default Cardspace;
