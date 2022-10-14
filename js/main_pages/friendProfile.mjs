import { apiPath } from "../api/api.mjs";
import { fetchData } from "../api/data/fetch.mjs";
import { displayOtherUserPosts } from "./posts.mjs";

const displayName = document.querySelector("#userName");
const profilePicture = document.querySelector("#profilePicture");

const apiProfiles = "/profiles/";
const url = new URL(location.href);
const currentUser = `${url.searchParams.get("name")}?_posts=true&_following=true&_followers=true`;

function UserProfile() {
  const userProfile = fetchData(apiPath, apiProfiles, currentUser);
  return userProfile;
}

const user = await UserProfile();
console.log(user.avatar);
displayName.innerHTML += user.name;

if (String(user.avatar) === String(undefined)) {
  profilePicture.innerHTML = `<h2> No Image </h2>`;
} else {
  profilePicture.src = user.avatar;
}

console.log(profilePicture.src)

displayOtherUserPosts(user);
