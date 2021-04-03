import { addPeople, setIsLoading, setNextPeoplePageId } from '../action_creators/peopleAC';
import { setPeopleWithVisibleHomeworld } from './setHomeworldThunk';
import { peopleUrl } from '../action_creators/constants';

export const loadPeopleByPageIdThunk = (pageId, allPlanets) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    if (pageId == 1) {
      fetch(`${peopleUrl}?page=${pageId}`)
        .then((res) => res.json())
        .then((data) => {
          const nextPageId = data?.next?.slice(34);
          dispatch(setNextPeoplePageId(nextPageId));

          dispatch(addPeople(data.results));
        });
    } else {
      fetch(`${peopleUrl}?page=${pageId}`)
        .then((res) => res.json())
        .then((data) => {
          const nextPageId = data?.next?.slice(34);
          dispatch(setNextPeoplePageId(nextPageId));
          //тут пишем логику по изменению homeworld
          const withVisibleHomeworldPeople = setPeopleWithVisibleHomeworld(
            data.results,
            allPlanets,
          );
          dispatch(addPeople(withVisibleHomeworldPeople));
        });
    }
    dispatch(setIsLoading(false));
  };
};
