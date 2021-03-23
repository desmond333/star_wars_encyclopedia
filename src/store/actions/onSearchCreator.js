let ON_SEARCH = 'ON_SEARCH';
//используем константы, чтобы не опечататься в строках

export const onSearchCreator = (searchQuery) => ({
  //тут fetch, потом удаляешь и делаешь в миддлвар thunk
  //возвращаем объект с параметрами action метода dispatch
  type: ON_SEARCH,
  searchQuery: searchQuery, //передадим миру бизнеса данные с сервера
});
