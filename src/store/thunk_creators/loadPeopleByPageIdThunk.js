import { addPeople, setIsLoading, setNextPeoplePageId } from '../action_creators/peopleAC';

import { peopleUrl } from '../action_creators/constants';

export const loadPeopleByPageIdThunk = (pageId) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    fetch(`${peopleUrl}?page=${pageId}`)
      .then((res) => res.json())
      .then((data) => {
        const nextPageId = data?.next?.slice(34);
        dispatch(addPeople(data.results));
        dispatch(setNextPeoplePageId(nextPageId));
      });
    dispatch(setIsLoading(false));
  };
};