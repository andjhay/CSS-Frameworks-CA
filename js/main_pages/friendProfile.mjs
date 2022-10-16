import { apiPath } from "../api/api.mjs";
import { fetchData } from "../api/data/fetch.mjs";
import { displayOtherUserPosts } from "./posts.mjs";

const displayName = document.querySelector("#userName");
const profilePicture = document.querySelector("#profilePicture");
const profilePictureDiv = document.querySelector("#profilePictureDiv");
const pageTitle = document.querySelector("title");
const userDetails = document.querySelector("#userDetails");
const listFollowers = document.querySelector("#listFollowers");
const listFollowing = document.querySelector("#listFollowing");
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

userDetails.innerHTML = `<p>Name: ${user.name}</p>
<p>Email: ${user.email}</p>
<p>Total Posts: ${user._count.posts}</p>
<p>Followers: ${user._count.followers}</p>
<p>Following: ${user._count.following}</p>
`;

user.followers.forEach((follower) => {
  listFollowers.innerHTML += `<div class="col border rounded-4 m-4"> 
  <div> <img id="profilePicture" class="img-fluid rounded-4" src="${follower.avatar}" alt="" width="100" height="100"> </div>
  <div> <a href="friend.html?name=${follower.name}"><p>${follower.name}</p></a> </div>
  </div>`;
});

user.following.forEach((follower) => {
  listFollowing.innerHTML += `<div class="col border rounded-4 m-4"> 
  <div> <img id="profilePicture" class="img-fluid rounded-4" src="${follower.avatar}" alt="" width="100" height="100"> </div>
  <div> <a href="friend.html?name=${follower.name}"><p>${follower.name}</p></a> </div>
  </div>`;
});

displayOtherUserPosts(user, user.name);
