import { updatePost } from "../api/data/update.mjs";

export function setUpdatePostListener() {
  const form = document.querySelector("#updateForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const postData = Object.fromEntries(formData.entries());

      updatePost(postData);
    });
  }
}
