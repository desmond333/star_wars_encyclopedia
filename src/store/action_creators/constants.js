export const peopleUrl = 'https://swapi.dev/api/people/';
export const planetsUrl = 'https://swapi.dev/api/planets/';
export const speciesUrl = 'https://swapi.dev/api/species/';
export const filmsUrl = 'https://swapi.dev/api/films/';

const AT = {
  //people
  ADD_PEOPLE: 'ADD_PEOPLE',
  SET_IS_LOADING: 'SET_IS_LOADING',
  SET_IS_SEARCHING: 'SET_IS_SEARCHING',
  SET_NEXT_PEOPLE_PAGE_ID: 'SET_NEXT_PEOPLE_PAGE_ID',
  SET_HOMEWORLD: 'SET_HOMEWORLD',
  SET_SPECIES: 'SET_SPECIES',
  SET_FILMS: 'SET_FILMS',
  //planets
  ADD_PLANETS: 'ADD_PLANETS',
  SET_NEXT_PLANETS_PAGE_ID: 'SET_NEXT_PLANETS_PAGE_ID',
  //species
  ADD_SPECIES: 'ADD_SPECIES',
  SET_NEXT_SPECIES_PAGE_ID: 'SET_NEXT_SPECIES_PAGE_ID',
  //films
  ADD_FILMS: 'ADD_FILMS',
  SET_NEXT_FILMS_PAGE_ID: 'SET_NEXT_FILMS_PAGE_ID',
  //search
  ADD_SEARCHABLE_PEOPLE: 'ADD_SEARCHABLE_PEOPLE',
};

export default AT;
