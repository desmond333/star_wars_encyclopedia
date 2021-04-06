import { addSearchablePeople, setIsLoadingSearch, setIsFound } from '../action_creators/searchAC';
import { peopleUrl } from '../action_creators/constants';

import { setPeopleWithVisibleHomeworld } from './setHomeworldThunk';
import { setPeopleWithVisibleSpecies } from './setSpeciesThunk';
import { setPeopleWithVisibleFilms } from './setFilmsThunk';

const getAllPlanets = (state) => state.planets.allPlanets;

const addPropsForPeople = (data, allPlanets, allSpecies, allFilms) => {
  console.log('data:', data)
}

export const loadPeopleBySearchValueThunk = (searchValue, allSpecies, allFilms) => {
  // ты можешь получить доступ к store передав в функцию ниже getState - ее вызов вернет весь кусок стора
  return (dispatch, getState) => {
    const state = getState();
    const allPlanets = getAllPlanets(state);

    // далее селектором получаешь нужные данные allPlanets, allSpecies, allFilms и тд
    dispatch(setIsLoadingSearch(true));

    fetch(`${peopleUrl}?search=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length == 0) {
          dispatch(setIsFound(false));
          dispatch(addSearchablePeople(data.results));

          dispatch(setIsLoadingSearch(false));

          return;
        }

        //далее логика для изменения homeworld
        // const withVisibleHomeworldPeople = setPeopleWithVisibleHomeworld(
        //   data.results,
        //   allPlanets,
        // );
        // //далее логика для изменения species
        // const withVisibleSpeciesPeople = setPeopleWithVisibleSpecies(
        //   withVisibleHomeworldPeople,
        //   allSpecies,
        // );
        // //далее логика для изменения films
        // const withVisibleFilmsPeople = setPeopleWithVisibleFilms(
        //   withVisibleSpeciesPeople,
        //   allFilms,
        // );

        const people = addPropsForPeople(data.results, allPlanets, allSpecies, allFilms);
        //чтобы увеличить скорость изменения вторичных данных,
        //возращаем уже модифицированный массив с людьми
        dispatch(addSearchablePeople(people));
        dispatch(setIsFound(true));

        dispatch(setIsLoadingSearch(false));
      });
  };
};
