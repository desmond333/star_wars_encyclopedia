import { addSpecies, setNextSpeciesPageId } from '../action_creators/speciesAC';

import { speciesUrl } from '../action_creators/constants';

export const loadSpeciesByPageIdThunk = (pageId) => {
  return (dispatch) => {
    fetch(`${speciesUrl}?page=${pageId}`)
      .then((res) => res.json())
      .then((data) => {
        const nextPageId = data?.next?.slice(35);

        dispatch(addSpecies(data.results));
        dispatch(setNextSpeciesPageId(nextPageId));
      });
  };
};
