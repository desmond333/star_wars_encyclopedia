import AT from '../action_creators/consts';

const initialState = {
  allPeople: [],
  nextPageId: 1,
  isLoading: false,
  hasMore: true,
};

const people = (state = initialState, action) => {
  switch (action.type) {
    case AT.ADD_PEOPLE:
      return {
        ...state,
        allPeople: [
          ...state.allPeople,
          ...action.payload.data,
        ]
      };
    case AT.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case AT.SET_NEXT_PAGE_ID:
      return {
        ...state,
        nextPageId: action.payload.pageId,
        hasMore: !!action.payload.pageId,
      };
    default:
      return state;
  }
};

export default people;
