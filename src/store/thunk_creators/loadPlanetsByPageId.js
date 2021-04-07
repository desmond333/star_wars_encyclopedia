import { addPlanets, setNextPlanetsPageId } from '../action_creators/planets';

import { planetsUrl } from '../constants/swAPI_urls';

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
