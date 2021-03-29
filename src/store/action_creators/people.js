import AT from './consts';

export const addPeople = (data) => ({
  type: AT.ADD_PEOPLE,
  payload: {
    data,
  }
});

export const setIsLoading = (bool) => ({
  type: AT.SET_IS_LOADING,
  payload: {
    isLoading: bool,
  }
});

export const setNextPageId = (id) => ({
  type: AT.SET_NEXT_PAGE_ID,
  payload: {
    pageId: id,
  }
});
