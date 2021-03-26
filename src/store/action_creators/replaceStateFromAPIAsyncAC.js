const REPLACE_STATE_FROM_API = 'REPLACE_STATE_FROM_API'; //используем константы, чтобы не опечататься в строках

export const replaceStateFromAPIAsyncAC = (data) => ({
  //возвращаем объект с параметрами action метода dispatch
  type: REPLACE_STATE_FROM_API,
  data: data, //так нагляднее
});
