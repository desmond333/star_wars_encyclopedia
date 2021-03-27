const REPLACE_STATE_PLANETS_BY_PLANETS_API = 'REPLACE_STATE_PLANETS_BY_PLANETS_API'; //используем константы, чтобы не опечататься в строках

export const replaceStatePlanetsByPlanetsAPIAsyncAC = (data) => ({
  //возвращаем объект с параметрами action метода dispatch
  type: REPLACE_STATE_PLANETS_BY_PLANETS_API,
  data: data, //так нагляднее
});