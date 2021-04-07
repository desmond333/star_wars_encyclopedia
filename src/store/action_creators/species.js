import AT from '../constants/action_types';

export const addSpecies = (data) => ({
  type: AT.ADD_SPECIES,
  payload: {
    data,
  },
});

export const setNextSpeciesPageId = (id) => ({
  type: AT.SET_NEXT_SPECIES_PAGE_ID,
  payload: {
    pageId: id,
  },
});
