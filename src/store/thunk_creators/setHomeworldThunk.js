import { setHomeworld } from '../action_creators/peopleAC';

export const setHomeworldInPeopleThunk = (nextPeoplePageId, allPeople, allPlanets) => {
  return (dispatch) => {
    const pageId = (Number(nextPeoplePageId)) - 1;
    let successPeopleCounter = 0;
    let withVisibleHomeworldPeople = allPeople.filter((man, index) => index >= pageId * 10 - 10);
    debugger
    for (let i = 0; i < allPlanets.length; i++) {
      //чтобы прекратить цикл заранее, когда цель выполнится досрочно
      if (successPeopleCounter === withVisibleHomeworldPeople.length) {
        debugger
        break;
      }
      for (let j = 0; j < withVisibleHomeworldPeople.length; j++) {
        if (withVisibleHomeworldPeople[j].homeworld === allPlanets[i].url) {
          withVisibleHomeworldPeople[j].homeworld = allPlanets[i].name;
          successPeopleCounter++;
        }
      }
    }
    dispatch(setHomeworld(withVisibleHomeworldPeople));
  };
};
