import find from 'lodash/find';

export const addPropsForPeople = (data, allPlanets, allSpecies, allFilms) => {
  const people = data.map((item) => {
    const homeworld = find(allPlanets, { url: item.homeworld })?.name;

    const species = item.species.map((specieUrl) => {
      return find(allSpecies, { url: specieUrl })?.name;
    });
    if (species.length == 0) species.push('Human');

    const films = item.films.map((filmUrl) => {
      return find(allFilms, { url: filmUrl })?.title;
    });

    return {
      ...item,
      homeworld,
      species,
      films,
    };
  });

  return people;
};
