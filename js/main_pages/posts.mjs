import { apiPath } from "../api/api.mjs";
import { removePost } from "../api/data/delete.mjs";
import { fetchAllData, fetchData } from "../api/data/fetch.mjs";
import { renderPostTemplates, renderPostTemplate, renderPostTemplateOtherUsers } from "../templates/post.mjs";

const apiPosts = "/posts/";

export async function multiPostFetch() {
  const posts = await fetchAllData(apiPath, apiPosts);
  const container = document.querySelector("#posts");
  if (container) {
    renderPostTemplates(posts, container);
  }
  return posts;
}

export async function singlePostFetch(postId) {
  const post = await fetchData(apiPath, apiPosts, postId);
  const container = document.querySelector("#displayPosts");
  if (container) {
    renderPostTemplate(post, container);
  }
  selectDeleteButtons();
}

export async function singlePostFetchOtherUsers(postId) {
  const post = await fetchData(apiPath, apiPosts, postId);
  const container = document.querySelector("#displayPosts");
  if (container) {
    renderPostTemplateOtherUsers(post, container);
  }
}

export function displayUserPosts(user) {
  user.posts.forEach((post) => {
    singlePostFetch(post.id);
  });
}

export function displayOtherUserPosts(user) {
  user.posts.forEach((post) => {
    singlePostFetchOtherUsers(post.id);
  });
}

export async function selectDeleteButtons() {
  const deleteButton = document.querySelectorAll("#deleteButton");

  deleteButton.forEach((button) => {
    button.addEventListener("click", deletePost);
  });

  function deletePost() {
    let postId = this.dataset.id;
    removePost(postId);
    location.reload();
  }
}
