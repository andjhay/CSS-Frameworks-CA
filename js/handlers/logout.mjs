import * as storage from "./storage.mjs";

export function logOut() {
  const logOut = document.querySelector("#logOut");

  if (logOut) {
    logOut.addEventListener("click", (event) => {
      storage.remove("token");
      storage.remove("user");
      location.reload();
      alert(`You are now logged out.`);
    });
  }
}
