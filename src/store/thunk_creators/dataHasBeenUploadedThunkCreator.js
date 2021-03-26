import { firstMainDataFromAPIAsyncAC } from '../action_creators/firstMainDataFromAPIAsyncAC';
import { secondMainDataFromAPIAsyncAC } from '../action_creators/secondMainDataFromAPIAsyncAC';
import { toggleIsFetchingAC } from '../action_creators/toggleIsFetchingAC';

import {
  firstPagePeopleRequestFromApi,
  secondPagePeopleRequestFromApi,
} from '../../../pages/api/swapi';

export const dataHasBeenUploadedThunkCreator = (props) => {
  //возращаем функцию
  return (dispatch) => {
    firstPagePeopleRequestFromApi().then((data) => dispatch(firstMainDataFromAPIAsyncAC(data)));
  };
};

export const secondDataHasBeenUploadedThunkCreator = (props) => {
  //возращаем функцию
  return (dispatch) => {
    secondPagePeopleRequestFromApi().then((data) => {
      debugger
      dispatch(secondMainDataFromAPIAsyncAC(data));
    });
  };
};
