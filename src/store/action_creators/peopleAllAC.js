//используем константы, чтобы не опечататься в строках
const REPLACE_STATE_PEOPLE_DATA_BY_PEOPLE_DATA_API = 'REPLACE_STATE_PEOPLE_DATA_BY_PEOPLE_DATA_API';
const ADD_PEOPLE_DATA_API_TO_STATE_PEOPLE_DATA = 'ADD_PEOPLE_DATA_API_TO_STATE_PEOPLE_DATA';
const SET_IS_LOADING = 'SET_IS_LOADING';


export const replaceStatePeopleByPeopleAPIAsyncAC = (data) => ({
  //возвращаем объект с параметрами action метода dispatch
  type: REPLACE_STATE_PEOPLE_DATA_BY_PEOPLE_DATA_API,
  data: data, //так нагляднее
});

export const addPeopleAPItoStatePeopleAC = (data) => ({
  //возвращаем объект с параметрами action метода dispatch
  type: ADD_PEOPLE_DATA_API_TO_STATE_PEOPLE_DATA,
  data: data, //так нагляднее
});

export const setIsLoadingAC = (isLoading) => ({
  //возвращаем объект с параметрами action метода dispatch
  type: SET_IS_LOADING,
  isLoading: isLoading, //так нагляднее
});
