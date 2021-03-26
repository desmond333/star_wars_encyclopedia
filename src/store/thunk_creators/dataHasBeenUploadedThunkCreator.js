import { addPeopleFromAPIAsyncAC } from '../action_creators/addPeopleFromAPIAsyncAC';

import { peoplePageRequestAPI } from '../../../pages/api/swapi';

export const dataHasBeenUploadedThunkCreator = (url) => {
  //возращаем функцию
  return (dispatch) => {
    peoplePageRequestAPI(url).then((data) => {
      // const firstPageUrl = "http://swapi.dev/api/people/?page=1";
      // if (data.next === firstPageUrl) {
      //   dispatch(firstMainDataFromAPIAsyncAC(data));
      // } else {
      //   dispatch(secondMainDataFromAPIAsyncAC(data));
      // }

      dispatch(addPeopleFromAPIAsyncAC(data));
    });
  };
};
