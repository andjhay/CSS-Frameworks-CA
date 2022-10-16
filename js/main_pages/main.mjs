import { setRegisterFormListener } from "../handlers/register.mjs";
import { setLoginFormListener } from "../handlers/login.mjs";
import { checkLoggedIn } from "../handlers/checkLoggedIn.mjs";
import { logOut } from "../handlers/logout.mjs";

const pathOriginal = location.pathname;

/**
 * Checks the page to determine what content the user wil get displayed
 */

const path = pathOriginal.slice(pathOriginal.lastIndexOf("/") + 1);
if (path === "login.html") {
  setLoginFormListener();
} else if (path === "register.html") {
  logOutButton.Disabled = true;
  setRegisterFormListener();
} else {
  checkLoggedIn();
}

logOut();
