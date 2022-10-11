import { authFetch } from "../authFetch.mjs";

export async function fetchAllData(baseURL, dataURL) {
  const fetchAllDataURL = `${baseURL}${dataURL}`;

  const response = await authFetch(fetchAllDataURL);

  return await response.json();
}

export async function fetchData(baseURL, dataURL, id) {
  const fetchDataURL = `${baseURL}${dataURL}${id}`;

  const response = await authFetch(fetchDataURL);

  return await response.json();
}
