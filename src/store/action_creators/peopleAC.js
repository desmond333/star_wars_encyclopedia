import AT from './constants';

export const addPeople = (data) => ({
  type: AT.ADD_PEOPLE,
  payload: {
    data,
  },
});

export const setIsLoading = (bool) => ({
  type: AT.SET_IS_LOADING,
  payload: {
    isLoading: bool,
  },
});

export const setIsSearching = (bool) => ({
  type: AT.SET_IS_SEARCHING,
  payload: {
    isSearching: bool,
  },
});

export const setNextPeoplePageId = (id) => ({
  type: AT.SET_NEXT_PEOPLE_PAGE_ID,
  payload: {
    pageId: id,
  },
});

export const setHomeworld = (withVisibleHomeworldPeople) => ({
  type: AT.SET_HOMEWORLD,
  payload: {
    withVisibleHomeworldPeople,
  },
});

export const setSpecies = (withVisibleSpeciesPeople) => ({
  type: AT.SET_SPECIES,
  payload: {
    withVisibleSpeciesPeople,
  },
});

export const setFilms = (withVisibleFilmsPeople) => ({
  type: AT.SET_FILMS,
  payload: {
    withVisibleFilmsPeople,
  },
});

