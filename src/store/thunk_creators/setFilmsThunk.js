import { setFilms } from '../action_creators/peopleAC';

export const setFilmsInPeopleThunk = (allPeoplePart, allFilms) => {
  return (dispatch) => {
    const withVisibleFilmsPeople = setPeopleWithVisibleFilms(allPeoplePart, allFilms);
    dispatch(setFilms(withVisibleFilmsPeople));
  };
};

export const setPeopleWithVisibleFilms = (allPeoplePart, allFilms) => {
  //выполнится от 1 человека до 10го
  for (let i = 0; i < allPeoplePart.length; i++) {
    //выполнится от 1 и до последнего url
    peopleFilmsUrls: for (let j = 0; j < allPeoplePart[i].films.length; j++) {
      //выполнится от 1 и до последнего фильма
      for (let w = 0; w < allFilms.length; w++) {
        if (allPeoplePart[i].films[j] === allFilms[w].url) {
          allPeoplePart[i].films[j] = allFilms[w].title;
          continue peopleFilmsUrls;
        }
      }
    }
  }
  debugger;
  return allPeoplePart;
};
