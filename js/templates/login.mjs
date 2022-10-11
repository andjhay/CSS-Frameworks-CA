import { load } from "../handlers/storage.mjs";

// Functions that alter page details if user is logged out

export function loginTemplate(mainContainer, currentUser) {
  mainContainer.innerHTML = `<div class="mb-3">Welcome to a private Noroff Social Site</br>To access choose</div>
  <div>
    <a href="login.html" class="m-2 btn btn-secondary w-25">Login</a>
    <p> or </p>
    <a href="register.html" class="m-2 btn btn-secondary btn w-25">Register</a>
  </div>`;

  currentUser.innerHTML = `User: Logged Out`;
}

export function loggedInTemplate(currentUser) {
  const user = load("user");
  currentUser.innerHTML = `User: ${user.name}`;
}
