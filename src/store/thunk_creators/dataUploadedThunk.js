import {
  replaceStatePeopleByPeopleAPIAsyncAC,
  addPeopleAPItoStatePeopleAC,
} from '../action_creators/peopleAllAC';
import { replaceStatePlanetsByPlanetsAPIAsyncAC } from '../action_creators/planetsAllAC';

import { getRequestSWAPI } from '../../../pages/api/swapi';

export const dataUploadedThunkCreator = (url) => {
  //возращаем функцию
  return function (dispatch) {
    getRequestSWAPI(url).then(function (data) {
      //switch
      if (url.includes('people')) {
        dispatch(addPeopleAPItoStatePeopleAC(data));
      } else if (url.includes('planets')) {
        dispatch(replaceStatePlanetsByPlanetsAPIAsyncAC(data));
      }
    });
  };
};
