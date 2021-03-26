const ADD_PEOPLE_FROM_API = 'ADD_PEOPLE_FROM_API'; //используем константы, чтобы не опечататься в строках

export const addPeopleFromAPIAsyncAC = (data) => ({
  //возвращаем объект с параметрами action метода dispatch
  type: ADD_PEOPLE_FROM_API,
  data: data, //так нагляднее
});
