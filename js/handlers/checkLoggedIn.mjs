import { loggedInTemplate, loginTemplate } from "../templates/login.mjs";
import { load } from "./storage.mjs";

const mainContainer = document.querySelector("main");
const currentUser = document.querySelector("#currentUser");
const logOut = document.querySelector("#logOut");
const logIn = document.querySelector("#logIn");

// Function to Check if AUTH token present, if present allow page to display content

export function checkLoggedIn() {
  const token = load("token");
  if (token === null) {
    loginTemplate(mainContainer, currentUser, logIn, logOut);
  } else {
    loggedInTemplate(currentUser, logIn, logOut);
  }
}
