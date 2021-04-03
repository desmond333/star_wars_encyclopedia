import { setHomeworld } from '../action_creators/peopleAC';

export const setHomeworldInPeopleThunk = (allPeoplePart, allPlanets) => {
  return (dispatch) => {
    const withVisibleHomeworldPeople = setPeopleWithVisibleHomeworld(allPeoplePart, allPlanets);
    dispatch(setHomeworld(withVisibleHomeworldPeople));
  };
};

export const setPeopleWithVisibleHomeworld = (allPeoplePart, allPlanets) => {
  let successPeopleCounter = 0;
  for (let i = 0; i < allPlanets.length; i++) {
    //чтобы прекратить цикл заранее, когда цель выполнится досрочно
    if (successPeopleCounter === allPeoplePart.length) {
      break;
    }
    for (let j = 0; j < allPeoplePart.length; j++) {
      if (allPeoplePart[j].homeworld === allPlanets[i].url) {
        allPeoplePart[j].homeworld = allPlanets[i].name;
        successPeopleCounter++;
      }
    }
  }
  return allPeoplePart;
};
