const baseUrl = 'https://swapi.dev/api/';

export async function firstPagePeopleRequestFromApi() {
  return fetch(baseUrl + 'people/?page=1').then((response) => response.json());
}

export async function secondPagePeopleRequestFromApi() {
  return fetch(baseUrl + 'people/?page=2').then((response) => response.json());
}

//здесь может быть еще одна функция
