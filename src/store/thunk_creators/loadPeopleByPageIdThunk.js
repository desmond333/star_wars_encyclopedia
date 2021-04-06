import find from 'lodash/find';
import { addPeople, setIsLoading, setNextPeoplePageId } from '../action_creators/peopleAC';
import { peopleUrl } from '../action_creators/constants';

const getAllPlanets = (state) => state.planets.allPlanets;
const getAllSpecies = (state) => state.species.allSpecies;
const getAllFilms = (state) => state.films.allFilms;
const getNextPageId = (state) => state.people.nextPageId;

const addPropsForPeople = (data, allPlanets, allSpecies, allFilms) => {
  console.log('data:', data)
  const people = data.map((item) => {
    const homeworld = find(allPlanets, { url: item.homeworld })?.name;

    const species = item.species.map((specieUrl) => {
      return find(allSpecies, { url: specieUrl })?.name;
    });

    const films = item.films.map((filmUrl) => {
      return find(allFilms, { url: filmUrl })?.title;
    });

    return {
      ...item,
      homeworld,
      species,
      films,
    }
  });

  console.log('peopleData:', people)

  return people;
}

export const loadPeopleByPageIdThunk = () => {
  return (dispatch, getState) => {
    const state = getState();
    const allPlanets = getAllPlanets(state);
    const allSpecies = getAllSpecies(state);
    const allFilms = getAllFilms(state);
    const nextPeoplePageId = getNextPageId(state);

    dispatch(setIsLoading(true));

    fetch(`${peopleUrl}?page=${nextPeoplePageId}`)
      .then((res) => res.json())
      .then((data) => {
        const nextPageId = data?.next?.slice(34);
        dispatch(setNextPeoplePageId(nextPageId));

        const people = addPropsForPeople(data.results, allPlanets, allSpecies, allFilms);

        dispatch(addPeople(people));
        dispatch(setIsLoading(false));
      });
  };
};
