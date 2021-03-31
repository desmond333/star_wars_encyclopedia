import AT from './constants';

export const addPlanets = (data) => ({
  type: AT.ADD_PLANETS,
  payload: {
    data,
  },
});

export const setNextPlanetsPageId = (id) => ({
  type: AT.SET_NEXT_PLANETS_PAGE_ID,
  payload: {
    pageId: id,
  },
});
