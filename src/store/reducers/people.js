const REPLACE_STATE_PEOPLE_DATA_BY_PEOPLE_DATA_API = 'REPLACE_STATE_PEOPLE_DATA_BY_PEOPLE_DATA_API'; //используем константы, чтобы не опечататься в строках
const ON_SEARCH_QUERY = 'ON_SEARCH_QUERY';

import AT from '../action_creators/consts';

const initialState = {
  allPeople: [],
  nextPageId: 1,
  isLoading: false,
  hasMore: true,
};

const people = (state = initialState, action) => {
  switch (action.type) {
    case REPLACE_STATE_PEOPLE_DATA_BY_PEOPLE_DATA_API:
      return {
        //создаем объект и сразу возвращаем
        ...state,
        data: { ...action.data },
      };
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

    // case ON_SEARCH_QUERY:
    //   let foundCreatures = [];
    //   for (let index = 0; index < state.results.length; index++) {
    //     if (action.searchQuery == state.results[index].name) {
    //       foundCreatures[index] += state.results[index];
    //     }
    //   }
    //   //почему цикл срабатывает только один раз?
    //   return {
    //     results: [...foundCreatures],
    //   };
    default:
      return state;
  }
};

export default people;
