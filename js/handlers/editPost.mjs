import { apiPath } from "../api/api.mjs";
import { fetchData } from "../api/data/fetch.mjs";
import { updatePost } from "../api/data/update.mjs";

const apiPosts = "/posts/";

async function setUpdatePostListener() {
  const form = document.querySelector("#updateForm");

  const url = new URL(location.href);
  const postID = url.searchParams.get("id");

  if (form) {
    const button = form.querySelector("button");
    button.disabled = true;

    const postData = await fetchData(apiPath, apiPosts, postID);

    form.title.value = postData.title;
    form.body.value = postData.body;
    form.tags.value = postData.tags;
    form.media.value = postData.media;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const postData = Object.fromEntries(formData.entries());
      postData.id = postID;

      updatePost(postData);
      alert(`Post edited`);
    });
  }
}

setUpdatePostListener();
