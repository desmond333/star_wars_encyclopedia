import AT from '../action_creators/constants';

const initialState = {
  allSearchablePeople: [],
  isLoadingSearchRr: true,
};

const searchRr = (state = initialState, action) => {
  switch (action.type) {
    case AT.ADD_SEARCHABLE_PEOPLE:
      return {
        allSearchablePeople: [...action.payload.data],
      };
    case AT.SET_IS_LOADING:
      return {
        ...state,
        isLoadingSearchRr: action.payload.isLoading,
      };
    default:
      return state;
  }
};

export default searchRr;
