const baseUrl = 'https://swapi.dev/api/';

export async function getCreaturesFromApi() {
  return fetch(baseUrl + 'people/').then((response) => response.json());
}

//здесь может быть еще одна функция
