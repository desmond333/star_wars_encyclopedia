import AT from '../constants/action_types';

export const addSearchablePeople = (data) => ({
  type: AT.ADD_SEARCHABLE_PEOPLE,
  payload: {
    data,
  },
});

export const setIsLoadingSearch = (bool) => ({
  type: AT.SET_IS_LOADING_SEARCH,
  payload: {
    isLoadingSearchRr: bool,
  },
});

export const setIsFound = (bool) => ({
  type: AT.SET_IS_FOUND,
  payload: {
    isFound: bool,
  },
});
