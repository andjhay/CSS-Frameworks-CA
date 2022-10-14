import { setRegisterFormListener } from "../handlers/register.mjs";
import { setLoginFormListener } from "../handlers/login.mjs";
import { checkLoggedIn } from "../handlers/checkLoggedIn.mjs";
import { logOut } from "../handlers/logout.mjs";
import { multiPostFetch } from "./posts.mjs";

const path = location.pathname;

if (path === "/html/login.html") {
  setLoginFormListener();
} else if (path === "/html/register.html") {
  setRegisterFormListener();
} else {
  checkLoggedIn();
}

multiPostFetch();

logOut();

// const sortOldToNew = document.querySelectorAll("#SortOld");
// const sortNew = document.querySelectorAll("#SortNew");
// const sortFriends = document.querySelectorAll("#sortFriends");
// const sortAll = document.querySelectorAll("#sortAll");

// function initiateFiltering() {
//   sortOldToNew.addEventListener("click", (event) => {
//     event.console.log("test");
//   });
// }

// initiateFiltering();
