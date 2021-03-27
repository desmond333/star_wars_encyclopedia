import {
  replaceStatePeopleByPeopleAPIAsyncAC,
  addPeopleAPItoStatePeople,
} from '../action_creators/peopleAllAC';
import { replaceStatePlanetsByPlanetsAPIAsyncAC } from '../action_creators/planetsAllAC';

import { getRequestSWAPI } from '../../../pages/api/swapi';

export const dataUploadedThunkCreator = (url) => {
  //возращаем функцию
  return function (dispatch) {
    getRequestSWAPI(url).then(function (data) {
      if (url.includes('people')) {
        dispatch(addPeopleAPItoStatePeople(data));
      } else if (url.includes('planets')) {
        dispatch(replaceStatePlanetsByPlanetsAPIAsyncAC(data));
      }
    });
  };
};
