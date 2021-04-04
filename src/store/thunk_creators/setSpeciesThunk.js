import { setSpecies } from '../action_creators/peopleAC';

export const setSpeciesInPeopleThunk = (allPeoplePart, allSpecies) => {
  return (dispatch) => {
    const withVisibleSpeciesPeople = setPeopleWithVisibleSpecies(allPeoplePart, allSpecies);
    dispatch(setSpecies(withVisibleSpeciesPeople));
  };
};

export const setPeopleWithVisibleSpecies = (allPeoplePart, allSpecies) => {
  //выполнится от 1 человека до 10го
  for (let i = 0; i < allPeoplePart.length; i++) {
    //в swAPI.dev у людей расы human пустой массив без урлов
    if (allPeoplePart[i].species.length == 0) {
      allPeoplePart[i].species = ['Human'];
      continue;
    }
    //выполнится от 1 и до последнего url
    peopleSpeciesUrls: for (let j = 0; j < allPeoplePart[i].species.length; j++) {
      //выполнится от 1 и до последней расы
      for (let w = 0; w < allSpecies.length; w++) {
        if (allPeoplePart[i].species[j] === allSpecies[w].url) {
          allPeoplePart[i].species[j] = allSpecies[w].name;
          continue peopleSpeciesUrls;
        }
      }
    }
  }
  debugger;
  return allPeoplePart;
};
