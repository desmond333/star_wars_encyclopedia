import { addFilms, setNextFilmsPageId } from '../action_creators/filmsAC';

import { filmsUrl } from '../action_creators/constants';

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
