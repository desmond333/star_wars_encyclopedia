import AT from '../constants/action_types';

const initialState = {
  allSearchablePeople: [],
  isLoadingSearch: false,
  isFound: 'initial',
};

const searchRr = (state = initialState, action) => {
  switch (action.type) {
    case AT.ADD_SEARCHABLE_PEOPLE:
      return {
        allSearchablePeople: [...action.payload.data],
      };
    case AT.SET_IS_LOADING_SEARCH:
      return {
        ...state,
        isLoadingSearch: action.payload.isLoadingSearch,
      };
    case AT.SET_IS_FOUND:
      return {
        ...state,
        isFound: action.payload.isFound,
      };
    default:
      return state;
  }
};

export default searchRr;
