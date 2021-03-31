import { addPlanets, setNextPlanetsPageId } from '../action_creators/planetsAC';

import { planetsUrl } from '../action_creators/constants';

export const loadPlanetsByPageIdThunk = (pageId) => {
  return (dispatch) => {
    fetch(`${planetsUrl}?page=${pageId}`)
      .then((res) => res.json())
      .then((data) => {
        const nextPageId = data?.next?.slice(35);
        dispatch(addPlanets(data.results));
        dispatch(setNextPlanetsPageId(nextPageId));
      });
  };
};
