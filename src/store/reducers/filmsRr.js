import AT from '../action_creators/constants'

const initialState = {
  allFilms: [],
  nextPageId: 1,
  hasMore: true,
};

const filmsRr = (state = initialState, action) => {
  switch (action.type) {
    case AT.ADD_FILMS:
      return {
        ...state,
        allFilms: [...state.allFilms, ...action.payload.data],
      };
    case AT.SET_NEXT_FILMS_PAGE_ID:
      return {
        ...state,
        nextPageId: action.payload.pageId,
        hasMore: !!action.payload.pageId,
      };
    default:
      return state;
  }
};

export default filmsRr;