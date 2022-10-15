import { setRegisterFormListener } from "../handlers/register.mjs";
import { setLoginFormListener } from "../handlers/login.mjs";
import { checkLoggedIn } from "../handlers/checkLoggedIn.mjs";
import { logOut } from "../handlers/logout.mjs";
import { multiPostFetch } from "./posts.mjs";

const pathOriginal = location.pathname;

const path = pathOriginal.slice(pathOriginal.lastIndexOf("/") + 1);
if (path === "login.html") {
  setLoginFormListener();
} else if (path === "register.html") {
  setRegisterFormListener();
} else {
  checkLoggedIn();
}

logOut();
