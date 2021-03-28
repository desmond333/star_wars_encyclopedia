const REPLACE_STATE_PEOPLE_DATA_BY_PEOPLE_DATA_API = 'REPLACE_STATE_PEOPLE_DATA_BY_PEOPLE_DATA_API'; //используем константы, чтобы не опечататься в строках
const ON_SEARCH_QUERY = 'ON_SEARCH_QUERY';
const SET_IS_LOADING = 'SET_IS_LOADING';
const ADD_PEOPLE_DATA_API_TO_STATE_PEOPLE_DATA = 'ADD_PEOPLE_DATA_API_TO_STATE_PEOPLE_DATA';

const initialState = {
  //если подчасть state не приходит в reducer, то используем эту подчасть state по умолчанию
  data: {
    count: null,
    next: 'https://swapi.dev/api/people/?page=1',
    previous: null,
    results: [
      {
        name: 'INITIAL STATE',
        birth_year: '000000',
        gender: 'INITIAL STATE',
        homeworld: 'http://swapi.dev/api/planets/1/',
        films: [
          'http://swapi.dev/api/films/1/',
          'http://swapi.dev/api/films/2/',
          'http://swapi.dev/api/films/3/',
          'http://swapi.dev/api/films/6/',
        ],
        species: ['someone'],
        url: 'http://swapi.dev/api/people/1/',
      },
    ],
  },
  isLoading: false,
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case REPLACE_STATE_PEOPLE_DATA_BY_PEOPLE_DATA_API:
      return {
        //создаем объект и сразу возвращаем
        ...state,
        data: { ...action.data },
      };
    case ADD_PEOPLE_DATA_API_TO_STATE_PEOPLE_DATA:
      return {
        ...state,
        data: {
          ...action.data,
          results: [...state.data.results, ...action.data.results],
        },
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

export default peopleReducer;
