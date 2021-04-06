import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Cardspace.module.scss';
import Card from './Card/Card';

import { loadPeopleByPageIdThunk } from '../../../store/thunk_creators/loadPeopleByPageIdThunk';
import { loadPlanetsByPageIdThunk } from '../../../store/thunk_creators/loadPlanetsByPageIdThunk';
import { setHomeworldInPeopleThunk } from '../../../store/thunk_creators/setHomeworldThunk';
import { loadSpeciesByPageIdThunk } from '../../../store/thunk_creators/loadSpeciesByPageIdThunk';
import { setSpeciesInPeopleThunk } from '../../../store/thunk_creators/setSpeciesThunk';
import { loadFilmsByPageIdThunk } from '../../../store/thunk_creators/loadFilmsByPageIdThunk';
import { setFilmsInPeopleThunk } from '../../../store/thunk_creators/setFilmsThunk';

const Cardspace = ({ appBodyRef }) => {
  const dispatch = useDispatch();

  //peopleRr
  const allPeople = useSelector((state) => state.people.allPeople);
  const nextPeoplePageId = useSelector((state) => state.people.nextPageId);
  const isLoading = useSelector((state) => state.people.isLoading);
  const isSearching = useSelector((state) => state.people.isSearching);
  const hasMore = useSelector((state) => state.people.hasMore);

  //planetsRr
  const allPlanets = useSelector((state) => {
    if (state.planets.hasMore == false) {
      return state.planets.allPlanets;
    }
    return;
  });
  const nextPlanetsPageId = useSelector((state) => state.planets.nextPageId);

  //speciesRr
  const allSpecies = useSelector((state) => {
    if (state.species.hasMore == false) {
      return state.species.allSpecies;
    }
    return;
  });
  const nextSpeciesPageId = useSelector((state) => state.species.nextPageId);

  //filmsRr
  const allFilms = useSelector((state) => {
    if (state.films.hasMore == false) {
      return state.films.allFilms;
    }
    return;
  });
  const nextFilmsPageId = useSelector((state) => state.films.nextPageId);

  //searchRr
  const isLoadingSearchRr = useSelector((state) => state.search.isLoadingSearchRr);
  const isFound = useSelector((state) => state.search.isFound);
  const allSearchablePeople = useSelector((state) => {
    if (isLoadingSearchRr == false) {
      return state.search.allSearchablePeople;
    }
    return;
  });

  //добавляем в peopleRr первую страницу людей при первом рендере
  useEffect(() => {
    dispatch(loadPeopleByPageIdThunk());
  }, []);

  //добавляем в planetsRr все страницы планет сразу после первого рендера
  useEffect(() => {
    //это бесконечный цикл благодаря зависимости в useEffect от pageId с 1 условием для выхода из него
    if (nextPlanetsPageId != undefined) {
      dispatch(loadPlanetsByPageIdThunk(nextPlanetsPageId));
    }
    //после загрузки всех планет устанавливаем homeworld первым десяти людям
    else {
      dispatch(setHomeworldInPeopleThunk(allPeople, allPlanets));
    }
  }, [nextPlanetsPageId]);

  //добавляем в speciesRr все страницы рас сразу после первого рендера
  useEffect(() => {
    //это бесконечный цикл благодаря зависимости в useEffect от pageId с 1 условием для выхода из него
    if (nextSpeciesPageId != undefined) {
      dispatch(loadSpeciesByPageIdThunk(nextSpeciesPageId));
    }
    //после загрузки всех рас устанавливаем species первым десяти людям
    else {
      dispatch(setSpeciesInPeopleThunk(allPeople, allSpecies));
    }
  }, [nextSpeciesPageId]);

  //добавляем в filmsRr все страницы фильмов сразу после первого рендера
  useEffect(() => {
    //это бесконечный цикл благодаря зависимости в useEffect от pageId с 1 условием для выхода из него
    if (nextFilmsPageId != undefined) {
      dispatch(loadFilmsByPageIdThunk(nextFilmsPageId));
    }
    //после загрузки всех рас устанавливаем films первым десяти людям
    else {
      dispatch(setFilmsInPeopleThunk(allPeople, allFilms));
    }
  }, [nextFilmsPageId]);

  //с помощью этой f загружаем следующую страницу с новыми людьми
  const loadPeople = () => {
    if (isLoading) {
      return;
    }
    //в этом thunk только что загруженным людям добавляется homeworld, species, films
    dispatch(loadPeopleByPageIdThunk());
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
              loader={<div className={styles.miniLoader}>Loading...</div>}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }>
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
