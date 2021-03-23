const ON_SEARCH_QUERY = 'ON_SEARCH_QUERY';
//используем константы, чтобы не опечататься в строках

export const onSearchQueryAC = (searchQuery) => ({
  //тут fetch, потом удаляешь и делаешь в миддлвар thunk
  //возвращаем объект с параметрами action метода dispatch
  type: ON_SEARCH_QUERY,
  searchQuery: searchQuery, //передадим миру бизнеса данные с сервера
});
