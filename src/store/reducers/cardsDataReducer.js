const REPLACE_STATE_FROM_API = 'REPLACE_STATE_FROM_API'; //используем константы, чтобы не опечататься в строках
const ON_SEARCH_QUERY = 'ON_SEARCH_QUERY';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const ADD_PEOPLE_FROM_API = 'ADD_PEOPLE_FROM_API';

const initialState = {
  //если подчасть state не приходит в reducer, то используем эту подчасть state по умолчанию
  data: {
    count: null,
    next: 'people/?page=1',
    previous: null,
    results: [
      {
        name: 'INITIAL STATE',
        height: '0',
        mass: '0',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
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
        vehicles: ['http://swapi.dev/api/vehicles/14/', 'http://swapi.dev/api/vehicles/30/'],
        starships: ['http://swapi.dev/api/starships/12/', 'http://swapi.dev/api/starships/22/'],
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-20T21:17:56.891000Z',
        url: 'http://swapi.dev/api/people/1/',
      },
    ],
  },
  isFetching: false, //запрос ПОСЫЛАЕТСЯ? False
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REPLACE_STATE_FROM_API:
      return {
        //создаем объект и сразу возвращаем
        ...state,
        data: { ...action.data },
      };
    case ADD_PEOPLE_FROM_API:
      return {
        ...state,
        data: {
          ...action.data,
          results: [...state.data.results, ...action.data.results],
        },
      };
    case ON_SEARCH_QUERY:
      let foundCreatures = [];
      for (let index = 0; index < state.results.length; index++) {
        if (action.searchQuery == state.results[index].name) {
          foundCreatures[index] += state.results[index];
        }
      }
      //почему цикл срабатывает только один раз?
      return {
        results: [...foundCreatures],
      };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export default cardsReducer;
