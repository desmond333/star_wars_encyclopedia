import { addPeople, setIsLoading, setNextPeoplePageId } from '../action_creators/peopleAC';
import { peopleUrl } from '../action_creators/constants';

import { setPeopleWithVisibleHomeworld } from './setHomeworldThunk';
import { setPeopleWithVisibleSpecies } from './setSpeciesThunk';
import { setPeopleWithVisibleFilms } from './setFilmsThunk';

export const loadPeopleByPageIdThunk = (pageId, allPlanets, allSpecies, allFilms) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    if (pageId == 1) {
      fetch(`${peopleUrl}?page=${pageId}`)
        .then((res) => res.json())
        .then((data) => {
          const nextPageId = data?.next?.slice(34);
          dispatch(setNextPeoplePageId(nextPageId));

          dispatch(addPeople(data.results));
        });
    } else {
      fetch(`${peopleUrl}?page=${pageId}`)
        .then((res) => res.json())
        .then((data) => {
          const nextPageId = data?.next?.slice(34);
          dispatch(setNextPeoplePageId(nextPageId));
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
          dispatch(addPeople(withVisibleFilmsPeople));
        });
    }
    dispatch(setIsLoading(false));
  };
};
