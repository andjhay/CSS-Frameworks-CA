import { apiPath } from "../api/api.mjs";
import { fetchData } from "../api/data/fetch.mjs";
import { displayOtherUserPosts } from "./posts.mjs";

const displayName = document.querySelector("#userName");
const profilePicture = document.querySelector("#profilePicture");
const profilePictureDiv = document.querySelector("#profilePictureDiv");
const pageTitle = document.querySelector("title");
const apiProfiles = "/profiles";
const url = new URL(location.href);
const currentUser = `${url.searchParams.get("name")}?_posts=true&_following=true&_followers=true`;

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

displayOtherUserPosts(user, user.name);
