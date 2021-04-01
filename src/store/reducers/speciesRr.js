import AT from '../action_creators/constants'

const initialState = {
  allSpecies: [],
  nextPageId: 1,
  hasMore: true,
};

const speciesRr = (state = initialState, action) => {
  switch (action.type) {
    case AT.ADD_SPECIES:
      return {
        ...state,
        allSpecies: [...state.allSpecies, ...action.payload.data],
      };
    case AT.SET_NEXT_SPECIES_PAGE_ID:
      return {
        ...state,
        nextPageId: action.payload.pageId,
        hasMore: !!action.payload.pageId,
      };
    default:
      return state;
  }
};

export default speciesRr;