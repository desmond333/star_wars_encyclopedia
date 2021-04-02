import AT from '../action_creators/constants';

const initialState = {
  allPeople: [],
  nextPageId: 1,
  isLoading: false,
  hasMore: true,
};

const peopleRr = (state = initialState, action) => {
  switch (action.type) {
    case AT.ADD_PEOPLE:
      return {
        ...state,
        allPeople: [...state.allPeople, ...action.payload.data],
      };
    case AT.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case AT.SET_NEXT_PEOPLE_PAGE_ID:
      return {
        ...state,
        nextPageId: action.payload.pageId,
        hasMore: !!action.payload.pageId,
      };
    case AT.SET_HOMEWORLD:
      if (state.allPeople.length == 10) {
        debugger;
        return {
          ...state,
          allPeople: action.payload.withVisibleHomeworldPeople,
        };
      } else {
        debugger;
        return {
          ...state,
          allPeople: [...state.allPeople, ...action.payload.withVisibleHomeworldPeople],
        };
      }
    default:
      return state;
  }
};

export default peopleRr;
