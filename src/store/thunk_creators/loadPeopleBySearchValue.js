import { addPropsForPeople } from '../helpers/addPropsForPeople';
import { addSearchablePeople, setIsLoadingSearch, setIsFound } from '../action_creators/search';
import { peopleUrl } from '../constants/swAPI_urls';
import Sel from '../selectors/selectors';

export const loadPeopleBySearchValueThunk = (searchValue) => {
  return (dispatch, getState) => {
    const state = getState();
    const allPlanets = Sel.getAllPlanets(state);

    const allSpecies = Sel.getAllSpecies(state);
    const allFilms = Sel.getAllFilms(state);

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

        const people = addPropsForPeople(data.results, allPlanets, allSpecies, allFilms);
        //чтобы увеличить скорость изменения вторичных данных,
        //возращаем уже модифицированный массив с людьми
        dispatch(addSearchablePeople(people));
        dispatch(setIsFound(true));

        dispatch(setIsLoadingSearch(false));
      });
  };
};
