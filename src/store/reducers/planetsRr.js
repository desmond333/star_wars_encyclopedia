import AT from '../action_creators/constants'

const initialState = {
  allPlanets: [],
  nextPageId: 1,
  hasMore: true,
};

const planetsRr = (state = initialState, action) => {
  switch (action.type) {
    case AT.ADD_PLANETS:
      return {
        ...state,
        allPlanets: [...state.allPlanets, ...action.payload.data],
      };
    case AT.SET_NEXT_PLANETS_PAGE_ID:
      return {
        ...state,
        nextPageId: action.payload.pageId,
        hasMore: !!action.payload.pageId,
      };
    default:
      return state;
  }
};

export default planetsRr;