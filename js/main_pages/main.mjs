import { setRegisterFormListener } from "../handlers/register.mjs";
import { setLoginFormListener } from "../handlers/login.mjs";
import { checkLoggedIn } from "../handlers/checkLoggedIn.mjs";
import { logOut } from "../handlers/logout.mjs";
import { multiPostFetch } from "./posts.mjs";

const path = location.pathname;

if (path === "/CSS-Frameworks-CA/html/login.html") {
  setLoginFormListener();
} else if (path === "/CSS-Frameworks-CA/html/register.html") {
  setRegisterFormListener();
} else {
  checkLoggedIn();
}

multiPostFetch();

logOut();
