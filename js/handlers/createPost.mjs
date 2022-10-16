import { createPost } from "../api/data/create.mjs";

export function setCreatePostListener() {
  const form = document.querySelector("#postForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const postData = Object.fromEntries(formData.entries());

      createPost(postData);
    });
  }
}
