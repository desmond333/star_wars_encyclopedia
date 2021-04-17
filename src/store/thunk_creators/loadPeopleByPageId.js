import { addPropsForPeople } from '../helpers/addPropsForPeople';
import { addPeople, setIsLoading, setNextPeoplePageId } from '../action_creators/people';
import { peopleUrl } from '../constants/swAPI_urls';
import Sel from '../selectors/selectors';

export const loadPeopleByPageIdThunk = () => {
  return (dispatch, getState) => {
    const state = getState();
    const allPlanets = Sel.getAllPlanets(state);
    const allSpecies = Sel.getAllSpecies(state);
    const allFilms = Sel.getAllFilms(state);
    const nextPeoplePageId = Sel.getNextPageId(state);

    dispatch(setIsLoading(true));

    fetch(`${peopleUrl}?page=${nextPeoplePageId}`)
      .then((res) => res.json())
      .then((data) => {
        const nextPageId = data?.next?.slice(34);
        dispatch(setNextPeoplePageId(nextPageId));

        const people = addPropsForPeople(data.results, allPlanets, allSpecies, allFilms);
        //чтобы увеличить скорость изменения вторичных данных,
        //возращаем уже модифицированный массив с людьми
        dispatch(addPeople(people));
        dispatch(setIsLoading(false));
      });
  };
};
