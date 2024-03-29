import AT from '../constants/action_types';

export const addFilms = (data) => ({
  type: AT.ADD_FILMS,
  payload: {
    data,
  },
});

export const setNextFilmsPageId = (id) => ({
  type: AT.SET_NEXT_FILMS_PAGE_ID,
  payload: {
    pageId: id,
  },
});
