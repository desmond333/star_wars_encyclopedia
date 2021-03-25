const DATA_HAS_BEEN_UPLOADED = 'DATA_HAS_BEEN_UPLOADED'; //используем константы, чтобы не опечататься в строках
const ON_SEARCH_QUERY = 'ON_SEARCH_QUERY';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
  //если подчасть state не приходит в reducer, то используем эту подчасть state по умолчанию
  results: [
    {
      name: 'INITIAL STATE',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'INITIAL STATE',
      homeworld: 'http://swapi.dev/api/planets/1/',
      films: [
        'http://swapi.dev/api/films/1/',
        'http://swapi.dev/api/films/2/',
        'http://swapi.dev/api/films/3/',
        'http://swapi.dev/api/films/6/',
      ],
      species: [],
      vehicles: ['http://swapi.dev/api/vehicles/14/', 'http://swapi.dev/api/vehicles/30/'],
      starships: ['http://swapi.dev/api/starships/12/', 'http://swapi.dev/api/starships/22/'],
      created: '2014-12-09T13:50:51.644000Z',
      edited: '2014-12-20T21:17:56.891000Z',
      url: 'http://swapi.dev/api/people/1/',
    },
  ],
  isFetching: false, //запрос ПОСЫЛАЕТСЯ? False
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_HAS_BEEN_UPLOADED:
      return {
        //создаем объект и сразу возвращаем
        results: [...action.data.results],
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
