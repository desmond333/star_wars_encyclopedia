export async function getRequestSWAPI(url) {
  return fetch(url).then((response) => response.json());
}
