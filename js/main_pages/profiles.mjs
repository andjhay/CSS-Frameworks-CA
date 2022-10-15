import { apiPath } from "../api/api.mjs";
import { fetchData } from "../api/data/fetch.mjs";
import { setCreatePostListener } from "../handlers/createPost.mjs";
import * as storage from "../handlers/storage.mjs";
import { displayUserPosts } from "./posts.mjs";

const displayName = document.querySelector("#userName");
const profilePicture = document.querySelector("#profilePicture");
const profilePictureDiv = document.querySelector("#profilePictureDiv");
const pageTitle = document.querySelector("title");

const apiProfiles = "/profiles";
const currentUser = `${storage.load("user").name}?_posts=true&_following=true&_followers=true`;

function UserProfile() {
  const userProfile = fetchData(apiPath, apiProfiles, currentUser);
  return userProfile;
}

const user = await UserProfile();
displayName.innerHTML += user.name;
pageTitle.innerHTML = `Social Noroff - Profile ${user.name}`;

if (user.avatar === "") {
  profilePictureDiv.innerHTML = `<h2> No Image </h2>`;
} else {
  profilePicture.src = user.avatar;
}

// IN PROGRESS
// function editProfile() {
//   const avatarButton = document.querySelectorAll("#avatarButton");

//   avatarButton.addEventListener("click", updateAvatar);

//   function updateAvatar() {

//     updatePost(postId);
//     location.reload();
//   }
// }

displayUserPosts(user);

setCreatePostListener();
