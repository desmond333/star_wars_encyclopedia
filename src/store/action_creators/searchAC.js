import AT from './constants';

export const addSearchablePeople = (data) => ({
  type: AT.ADD_SEARCHABLE_PEOPLE,
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
