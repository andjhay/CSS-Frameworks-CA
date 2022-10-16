import { multiPostFetch } from "../main_pages/posts.mjs";
import { loggedInTemplate, loginTemplate } from "../templates/login.mjs";
import { load } from "./storage.mjs";

const mainContainer = document.querySelector("main");
const currentUser = document.querySelector("#currentUser");
const logOutButton = document.querySelector("#logOutButton");
const logIn = document.querySelector("#logIn");

const pathOriginal = location.pathname;
const path = pathOriginal.slice(pathOriginal.lastIndexOf("/") + 1);

/**
 * Check if user is logged in by auth token and then determines what content to display,
 * if not logged in user gets asked to log in or register.
 */

export function checkLoggedIn() {
  const token = load("token");
  if (token === null) {
    loginTemplate(mainContainer, currentUser);
    logOutButton.innerHTML = "Log In";
  } else {
    loggedInTemplate(currentUser, logIn);

    const pathOriginal = location.pathname;

    const path = pathOriginal.slice(pathOriginal.lastIndexOf("/") + 1);
    if (path === "index.html") {
      multiPostFetch();
    }
  }
}
