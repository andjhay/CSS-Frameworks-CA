import { apiPath } from "../api.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "post";

export async function createPost(postData) {
  const createPostURL = apiPath + action;
  if (postData.media === "") {
    delete postData.media;
  }
  const response = await authFetch(createPostURL, {
    method,
    body: JSON.stringify(postData),
  });
  alert(`Post created`);
  location.reload();
  return await response.json();
}
