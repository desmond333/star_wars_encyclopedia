const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'; //используем константы, чтобы не опечататься в строках

export const toggleIsFetchingAC = (isFetching) => ({
  //возвращаем объект с параметрами action метода dispatch
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching, //так нагляднее
});