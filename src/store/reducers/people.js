import AT from '../constants/action_types';

const initialState = {
  allPeople: [],
  nextPageId: 1,
  isLoading: true,
  isSearching: false,
  hasMore: true,
};

const peopleRr = (state = initialState, action) => {
  switch (action.type) {
    case AT.ADD_PEOPLE:
      return {
        ...state,
        allPeople: [
          ...state.allPeople,
          ...action.payload.data
        ],
      };
    case AT.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case AT.SET_IS_SEARCHING:
      return {
        ...state,
        isSearching: action.payload.isSearching,
      };
    case AT.SET_NEXT_PEOPLE_PAGE_ID:
      return {
        ...state,
        nextPageId: action.payload.pageId,
        hasMore: !!action.payload.pageId,
      };
    default:
      return state;
  }
};

export default peopleRr;
