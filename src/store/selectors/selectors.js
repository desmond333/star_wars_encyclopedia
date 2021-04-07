const Sel = {
  //peopleRr
  getAllPeople(state) { return state.people.allPeople},
  getIsLoading(state) { return state.people.isLoading},
  getIsSearching(state) { return state.people.isSearching},
  getHasMore(state) { return state.people.hasMore},
  getNextPageId(state) { return state.people.nextPageId},

  //searchRr
  getIsLoadingSearchRr(state) { return state.search.isLoadingSearchRr},
  getIsFound(state) { return state.search.isFound},

  //nextPage of secondary data
  getNextPlanetsPageId(state) { return state.planets.nextPageId},
  getNextSpeciesPageId(state) { return state.species.nextPageId},
  getNextFilmsPageId(state) { return state.films.nextPageId},

  //get secondary data
  getAllPlanets(state) { return state.planets.allPlanets},
  getAllSpecies(state) { return state.species.allSpecies},
  getAllFilms(state) { return state.films.allFilms},
  getAllSearchablePeople(state) { return state.search.allSearchablePeople},
};

export default Sel;
