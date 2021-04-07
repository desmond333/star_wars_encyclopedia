import { addFilms, setNextFilmsPageId } from '../action_creators/films';

import { filmsUrl } from '../constants/swAPI_urls';

export const loadFilmsByPageIdThunk = (pageId) => {
  return (dispatch) => {
    fetch(`${filmsUrl}?page=${pageId}`)
      .then((res) => res.json())
      .then((data) => {
        const nextPageId = data?.next?.slice(33);

        dispatch(addFilms(data.results));
        dispatch(setNextFilmsPageId(nextPageId));
      });
  };
};
