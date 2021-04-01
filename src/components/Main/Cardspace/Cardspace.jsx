import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Cardspace.module.scss';
import Card from './Card/Card';
import { loadPeopleByPageIdThunk } from '../../../store/thunk_creators/loadPeopleByPageIdThunk';
import { loadPlanetsByPageIdThunk } from '../../../store/thunk_creators/loadPlanetsByPageIdThunk';
import { setHomeworld } from '../../../store/action_creators/peopleAC';

const Cardspace = ({ appBodyRef }) => {
  const dispatch = useDispatch();

  const allPeople = useSelector((state) => state.people.allPeople);
  const allPlanets = useSelector((state) => state.planets.allPlanets);
  const nextPeoplePageId = useSelector((state) => state.people.nextPageId);
  const nextPlanetsPageId = useSelector((state) => state.planets.nextPageId);
  const isLoading = useSelector((state) => state.people.isLoading);
  const hasMore = useSelector((state) => state.people.hasMore);

  //добавляем в peopleRr первую страницу людей при первом рендере
  useEffect(() => {
    dispatch(loadPeopleByPageIdThunk(nextPeoplePageId));
  }, []);

  //добавляем в planetsRr все страницы планет сразу после первого рендера
  useEffect(() => {
    //это бесконечный цикл с условием его завершения благодаря зависимости в useEffect от nextPlanetsPageId
    if (nextPlanetsPageId != undefined) {
      dispatch(loadPlanetsByPageIdThunk(nextPlanetsPageId));
    }
    //после загрузки всех планет устанавливаем homeworld первым десяти людям и отправляем новый массив людей в peopleRr
    else {
      let successPeopleCounter = 0;
      let withVisibleHomeworldPeople = allPeople;
      for (let i = 0; i < allPlanets.length; i++) {
        //чтобы прекратить цикл заранее, когда цель выполнится досрочно
        if (successPeopleCounter === withVisibleHomeworldPeople.length) {
          break;
        }
        for (let j = 0; j < withVisibleHomeworldPeople.length; j++) {
          if (withVisibleHomeworldPeople[j].homeworld === allPlanets[i].url) {
            withVisibleHomeworldPeople[j].homeworld = allPlanets[i].name;
            successPeopleCounter++;
          }
        }
      }
      dispatch(setHomeworld(withVisibleHomeworldPeople));
    }
  }, [nextPlanetsPageId]);

  //с помощью этой f загружаем следующую страницу с новыми людьми
  const loadPeople = () => {
    if (isLoading) {
      return;
    }
    dispatch(loadPeopleByPageIdThunk(nextPeoplePageId));
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
