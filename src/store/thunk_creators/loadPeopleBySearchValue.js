import { addSearchablePeople, setIsLoadingSearch, setIsFound } from '../action_creators/searchAC';
import { peopleUrl } from '../action_creators/constants';

import { setPeopleWithVisibleHomeworld } from './setHomeworldThunk';
import { setPeopleWithVisibleSpecies } from './setSpeciesThunk';
import { setPeopleWithVisibleFilms } from './setFilmsThunk';

export const loadPeopleBySearchValueThunk = (searchValue, allPlanets, allSpecies, allFilms) => {
  return (dispatch) => {
    dispatch(setIsLoadingSearch(true));
    fetch(`${peopleUrl}?search=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        debugger;
        if (data.results.length == 0) {
          dispatch(setIsFound(false));
          dispatch(addSearchablePeople(data.results));
        } else {
          //далее логика для изменения homeworld
          const withVisibleHomeworldPeople = setPeopleWithVisibleHomeworld(
            data.results,
            allPlanets,
          );
          //далее логика для изменения species
          const withVisibleSpeciesPeople = setPeopleWithVisibleSpecies(
            withVisibleHomeworldPeople,
            allSpecies,
          );
          //далее логика для изменения films
          const withVisibleFilmsPeople = setPeopleWithVisibleFilms(
            withVisibleSpeciesPeople,
            allFilms,
          );
          //чтобы увеличить скорость изменения вторичных данных,
          //возращаем уже модифицированный массив с людьми
          dispatch(addSearchablePeople(withVisibleFilmsPeople));
          dispatch(setIsFound(true));
        }
        dispatch(setIsLoadingSearch(false));
      });
  };
};
