import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Cardspace.module.scss';
import Card from './Card/Card';

import Sel from '../../../store/selectors/selectors';
import {
  loadPeopleByPageIdThunk,
  loadPlanetsByPageIdThunk,
  loadSpeciesByPageIdThunk,
  loadFilmsByPageIdThunk,
} from '../../../store/thunk_creators/index';

const Cardspace = ({ appBodyRef }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  //peopleRr
  const allPeople = Sel.getAllPeople(state);
  const isLoading = Sel.getIsLoading(state);
  const isSearching = Sel.getIsSearching(state);
  const hasMore = Sel.getHasMore(state);

  //nextPage of secondary data
  const nextPlanetsPageId = Sel.getNextPlanetsPageId(state);
  const nextSpeciesPageId = Sel.getNextSpeciesPageId(state);
  const nextFilmsPageId = Sel.getNextFilmsPageId(state);

  //searchRr
  const isFound = Sel.getIsFound(state);
  const allSearchablePeople = Sel.getAllSearchablePeople(state);

  //добавляем в planetsRr все страницы планет сразу после первого рендера
  useEffect(() => {
    if (nextPlanetsPageId != undefined) {
      dispatch(loadPlanetsByPageIdThunk(nextPlanetsPageId));
    }
  }, [nextPlanetsPageId]);

  //добавляем в speciesRr все страницы рас сразу после первого рендера
  useEffect(() => {
    if (nextSpeciesPageId != undefined) {
      dispatch(loadSpeciesByPageIdThunk(nextSpeciesPageId));
    }
  }, [nextSpeciesPageId]);

  //добавляем в filmsRr все страницы фильмов сразу после первого рендера
  useEffect(() => {
    if (nextFilmsPageId != undefined) {
      dispatch(loadFilmsByPageIdThunk(nextFilmsPageId));
    }
  }, [nextFilmsPageId]);

  //добавляем в peopleRr первую страницу людей после загрузки всех вторичных данных
  useEffect(() => {
    nextPlanetsPageId === undefined &&
      nextSpeciesPageId === undefined &&
      nextFilmsPageId === undefined &&
      dispatch(loadPeopleByPageIdThunk());
  }, [nextPlanetsPageId, nextSpeciesPageId, nextFilmsPageId]);

  //с помощью этой f загружаем следующую страницу с новыми людьми
  const loadPeople = () => {
    if (isLoading) {
      return;
    }
    setTimeout(() => {
      //в этом thunk только что загруженным людям добавляется homeworld, species, films
      dispatch(loadPeopleByPageIdThunk());
    }, 1300);
  };

  return (
    <div className={styles.cards}>
      <div className={styles.cards__container}>
        <ul className={styles.cards__list}>
          {isSearching &&
            allSearchablePeople != undefined &&
            allSearchablePeople.map((man, index) => (
              <Card key={`${man}_${index}`} man={man} appBodyRef={appBodyRef} />
            ))}
          {isSearching && !isFound && (
            <div className={styles.cards__noFound}>No found. Let's try again.</div>
          )}
          {!isSearching && (
            <InfiniteScroll
              className={styles.cards__infiniteScroll}
              style={{ overflow: 'visible' }}
              dataLength={allPeople?.length || 0}
              next={loadPeople}
              hasMore={hasMore}
              scrollThreshold={1}>
              {allPeople?.map((man, index) => (
                <Card key={`${man}_${index}`} man={man} appBodyRef={appBodyRef} />
              ))}
            </InfiniteScroll>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Cardspace;
