const REPLACE_STATE_PLANETS_BY_PLANETS_API = 'REPLACE_STATE_PLANETS_BY_PLANETS_API'; //используем константы, чтобы не опечататься в строках
// const ON_SEARCH_QUERY = 'ON_SEARCH_QUERY';
// const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
// const ADD_PEOPLE_DATA_API_TO_STATE_PEOPLE_DATA = 'ADD_PEOPLE_DATA_API_TO_STATE_PEOPLE_DATA';

const initialState = {
  //если подчасть state не приходит в reducer, то используем эту подчасть state по умолчанию
  data: {
    count: 60, 
    next: "https://swapi.dev/api/planets/?page=1", 
    previous: null, 
    results: [],
  },
  isFetching: false, //запрос ПОСЫЛАЕТСЯ? False
};

const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REPLACE_STATE_PLANETS_BY_PLANETS_API:
      return {
        //создаем объект и сразу возвращаем
        ...state,
        data: { ...action.data, results: [...state.data.results, ...action.data.results] },
      };
    // case ADD_PEOPLE_DATA_API_TO_STATE_PEOPLE_DATA:
    //   return {
    //     ...state,
    //     data: {
    //       ...action.data,
    //       results: [...state.data.results, ...action.data.results],
    //     },
    //   };
    default:
      return state;
  }
};

export default planetsReducer;
