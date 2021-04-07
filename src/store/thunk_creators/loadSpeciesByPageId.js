import { addSpecies, setNextSpeciesPageId } from '../action_creators/species';

import { speciesUrl } from '../constants/swAPI_urls';

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
