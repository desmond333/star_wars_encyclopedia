const REPLACE_STATE_PEOPLE_DATA_BY_PEOPLE_DATA_API = 'REPLACE_STATE_PEOPLE_DATA_BY_PEOPLE_DATA_API'; //используем константы, чтобы не опечататься в строках
const ADD_PEOPLE_DATA_API_TO_STATE_PEOPLE_DATA = 'ADD_PEOPLE_DATA_API_TO_STATE_PEOPLE_DATA'; //используем константы, чтобы не опечататься в строках

export const replaceStatePeopleByPeopleAPIAsyncAC = (data) => ({
  //возвращаем объект с параметрами action метода dispatch
  type: REPLACE_STATE_PEOPLE_DATA_BY_PEOPLE_DATA_API,
  data: data, //так нагляднее
});

export const addPeopleAPItoStatePeople = (data) => ({
  //возвращаем объект с параметрами action метода dispatch
  type: ADD_PEOPLE_DATA_API_TO_STATE_PEOPLE_DATA,
  data: data, //так нагляднее
});
