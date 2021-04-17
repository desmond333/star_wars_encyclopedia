import AT from '../constants/action_types';

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

export const setIsLoaderVisible = (bool) => ({
  type: AT.SET_IS_LOADER_VISIBLE,
  payload: {
    isLoaderVisible: bool,
  },
});

