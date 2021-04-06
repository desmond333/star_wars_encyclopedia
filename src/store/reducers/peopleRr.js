import AT from '../action_creators/constants';

const initialState = {
  allPeople: [],
  nextPageId: 1,
  isLoading: false,
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
    case AT.SET_HOMEWORLD:
      //нужен только вначале, когда людей не более 10
      return {
        ...state,
        allPeople: action.payload.withVisibleHomeworldPeople,
      };
    case AT.SET_SPECIES:
      //нужен только вначале, когда людей не более 10
      return {
        ...state,
        allPeople: action.payload.withVisibleSpeciesPeople,
      };
    case AT.SET_FILMS:
      //нужен только вначале, когда людей не более 10
      return {
        ...state,
        allPeople: action.payload.withVisibleFilmsPeople,
      };
    default:
      return state;
  }
};

export default peopleRr;
