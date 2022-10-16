import { apiPath } from "../api.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "put";

export async function updatePost(postData) {
  const updatePostURL = `${apiPath}${action}/${postData.id}`;
  if (postData.media === "") {
    delete postData.media;
  }
  const response = await authFetch(updatePostURL, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
