import { apiPath } from "../api.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "delete";

export async function removePost(id) {
  const deletePostURL = `${apiPath}${action}/${id}`;

  const response = await authFetch(deletePostURL, {
    method,
  });

  return await response.json();
}
