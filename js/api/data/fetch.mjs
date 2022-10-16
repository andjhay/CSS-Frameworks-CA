import { authFetch } from "../authFetch.mjs";

export async function fetchAllData(baseURL, dataURL, limit, sort, offset) {
  const fetchAllDataURL = `${baseURL}${dataURL}?_author=true&_comments=true&_reactions=true&limit=${limit}&offset=${offset}${sort}`;

  const response = await authFetch(fetchAllDataURL);

  return await response.json();
}

export async function fetchData(baseURL, dataURL, id) {
  const fetchDataURL = `${baseURL}${dataURL}/${id}`;

  const response = await authFetch(fetchDataURL);

  return await response.json();
}
