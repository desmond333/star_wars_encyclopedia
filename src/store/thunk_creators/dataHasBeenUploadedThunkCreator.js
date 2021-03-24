import { dataHasBeenUploadedAsyncAC } from '../action_creators/dataHasBeenUploadedAsyncAC';
import { toggleIsFetchingAC } from '../action_creators/toggleIsFetchingAC';

import { getCreaturesFromApi } from '../../../pages/api/swapi';

export const dataHasBeenUploadedThunkCreator = (props) => {
  //возращаем функцию
  return (dispatch) => {
    dispatch(toggleIsFetchingAC(true));

    getCreaturesFromApi().then((data) => dispatch(dataHasBeenUploadedAsyncAC(data)));

    dispatch(toggleIsFetchingAC(false));
  };
};
