// вынеси в consts.js
const peopleUrl = "https://swapi.dev/api/people/";
import {
  addPeople,
  setIsLoading,
  setNextPageId,
} from '../action_creators/people';

// делай отдельные функции для каждого запроса вместо свитча
// export const dataUploadedThunkCreator = (url) => {
//   //возращаем функцию
//   return (dispatch) => {
//     // getRequestSWAPI(url)
//       .then((data) => {
//         //switch
//         if (url.includes('people')) {
//           dispatch(addPeopleAPItoStatePeopleAC(data));
//         } else if (url.includes('planets')) {
//           dispatch(replaceStatePlanetsByPlanetsAPIAsyncAC(data));
//         }
//       });
//   };
// };

export const loadPeopleByPageIdThunk = (pageId) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));

    fetch(`${peopleUrl}?page=${pageId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data:', data)
        const nextPageId = data?.next?.slice(34);

        console.log('nextPageId:', nextPageId)

        dispatch(addPeople(data.results));
        dispatch(setNextPageId(nextPageId));

        dispatch(setIsLoading(false));
      });
  };
};
