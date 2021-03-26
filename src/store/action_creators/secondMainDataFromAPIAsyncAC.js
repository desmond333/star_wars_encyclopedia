const SECOND_MAIN_DATA_FROM_API = 'SECOND_MAIN_DATA_FROM_API'; //используем константы, чтобы не опечататься в строках

export const secondMainDataFromAPIAsyncAC = (data) => ({
  //возвращаем объект с параметрами action метода dispatch
  type: SECOND_MAIN_DATA_FROM_API,
  data: data, //так нагляднее
});
