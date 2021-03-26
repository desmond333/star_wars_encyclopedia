const FIRST_MAIN_DATA_FROM_API = 'FIRST_MAIN_DATA_FROM_API'; //используем константы, чтобы не опечататься в строках

export const firstMainDataFromAPIAsyncAC = (data) => ({
  //возвращаем объект с параметрами action метода dispatch
  type: FIRST_MAIN_DATA_FROM_API,
  data: data, //так нагляднее
});
