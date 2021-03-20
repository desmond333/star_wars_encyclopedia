let DATA_HAS_BEEN_UPLOADED = 'DATA_HAS_BEEN_UPLOADED'; //используем константы, чтобы не опечататься в строках

export const dataHasBeenUploadedCreator = (data) => ({
  //возвращаем объект с параметрами action метода dispatch
  type: DATA_HAS_BEEN_UPLOADED,
  data: data, //передадим миру бизнеса данные с сервера
});