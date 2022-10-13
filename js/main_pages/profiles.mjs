import { apiPath } from "../api/api.mjs";
import { removePost } from "../api/data/delete.mjs";
import { fetchAllData, fetchData } from "../api/data/fetch.mjs";
import { setCreatePostListener } from "../handlers/createPost.mjs";
import * as storage from "../handlers/storage.mjs";
import { singlePostFetch } from "./posts.mjs";

const displayName = document.querySelector("#userName");
const profilePicture = document.querySelector("#profilePicture");

const apiProfiles = "/profiles/";
const currentUser = `${storage.load("user").name}?_posts=true&_following=true&_followers=true`;

function UserProfile() {
  const userProfile = fetchData(apiPath, apiProfiles, currentUser);
  return userProfile;
}

const user = await UserProfile();
displayName.innerHTML += user.name;

if (String(user.media) === String(undefined)) {
  profilePicture.innerHTML = `<h2> No Image </h2>`;
} else {
  profilePicture.src = user.media;
}

function displayUserPosts(user) {
  user.posts.forEach((post) => {
    singlePostFetch(post.id);
  });
}

displayUserPosts(user);

setCreatePostListener();
