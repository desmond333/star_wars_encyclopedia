export async function peoplePageRequestAPI(url) {
  return fetch(url).then((response) => response.json());
}
