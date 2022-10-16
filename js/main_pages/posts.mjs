import { apiPath } from "../api/api.mjs";
import { removePost } from "../api/data/delete.mjs";
import { fetchAllData, fetchData } from "../api/data/fetch.mjs";
import { load, save } from "../handlers/storage.mjs";
import {
  renderPostTemplates,
  renderPostTemplate,
  renderPostTemplateOtherUsers,
  renderIndividualPostTemplate,
} from "../templates/post.mjs";

const apiPosts = "/posts";

export async function multiPostFetch() {
  const sortOld = document.querySelector("#sortOld");
  const sortNew = document.querySelector("#sortNew");
  const previousButton = document.querySelector("#previousPosts");
  const nextButton = document.querySelector("#nextPosts");
  const displayPage = document.querySelector("#pageNumber");
  const container = document.querySelector("#posts");

  /**
   * Searches the entire api for posts
   * by searchTerm
   * text or post ID
   */

  function Search() {
    const form = document.querySelector("#search");

    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const searchTerm = Object.fromEntries(formData.entries()).search;
        console.log(searchTerm);
        loadEntirePostLibrary(searchTerm.toLowerCase());
      });
    }
  }

  /**
   * Loads all api posts (total is custom set) then returns only objects in array that match the search input
   * @param {string} searchTerm the input from search field
   */

  async function loadEntirePostLibrary(searchTerm) {
    let limit = 3000;
    let sort = "";
    let offset = 0;
    const posts = await fetchAllData(apiPath, apiPosts, limit, sort, offset);
    const searchedPosts = posts.filter((post) => {
      if (
        post.title.toLowerCase().includes(searchTerm) == true ||
        post.body.toLowerCase().includes(searchTerm) == true ||
        post.author.name.toLowerCase().includes(searchTerm) == true ||
        post.id == Number(searchTerm)
      ) {
        return true;
      }
    });
    container.innerHTML = "";
    renderPostTemplates(searchedPosts, container);
  }

  Search();

  let offset = 0;
  save("currentPage", "1");
  save("currentSort", "");
  const currentSort = load("currentSort");
  let limit = 10;

  /**
   * Loads posts to page
   * @param {number} limit how many posts to load
   * @param {string} sort query string to tell api how to return array
   * @param {number} offset number tells the api how many post from the first in the array to return, used to cycle through page by page
   */

  async function loadPosts(limit, sort, offset) {
    const posts = await fetchAllData(apiPath, apiPosts, limit, sort, offset);
    let currentPage = Number(load("currentPage"));
    renderPostTemplates(posts, container);
    displayPage.innerHTML = currentPage;
    return posts;
  }

  loadPosts(limit, currentSort, offset);

  sortOld.addEventListener("click", (event) => {
    save("currentSort", "&sort=created&sortOrder=asc");
    const currentSort = load("currentSort");
    const offset = 0;
    save("currentPage", "1");
    let currentPage = Number(load("currentPage"));
    displayPage.innerHTML = currentPage;
    container.innerHTML = "";
    loadPosts(limit, currentSort, offset);
  });

  sortNew.addEventListener("click", (event) => {
    save("currentSort", "&sort=created&sortOrder=desc");
    const currentSort = load("currentSort");
    const offset = 0;
    save("currentPage", "1");
    let currentPage = Number(load("currentPage"));
    displayPage.innerHTML = currentPage;
    container.innerHTML = "";
    loadPosts(limit, currentSort, offset);
  });

  previousButton.addEventListener("click", (event) => {
    if (offset != 0) offset = offset - 10;
    console.log(offset);
    let currentPage = Number(load("currentPage"));
    if (currentPage != 1) currentPage = currentPage - 1;
    save("currentPage", currentPage);
    displayPage.innerHTML = currentPage;
    container.innerHTML = "";
    const currentSort = load("currentSort");
    loadPosts(limit, currentSort, offset);
  });
  nextButton.addEventListener("click", (event) => {
    offset = offset + 10;
    let currentPage = Number(load("currentPage"));
    currentPage = currentPage + 1;
    save("currentPage", currentPage);
    displayPage.innerHTML = currentPage;
    container.innerHTML = "";
    const currentSort = load("currentSort");
    loadPosts(limit, currentSort, offset);
  });
}

export async function singlePostFetch(postId) {
  const post = await fetchData(apiPath, apiPosts, postId);
  const container = document.querySelector("#displayPosts");
  if (container) {
    renderPostTemplate(post, container);
  }
  selectDeleteButtons();
}

export async function singlePostFetchOtherUsers(postId, userName) {
  const post = await fetchData(apiPath, apiPosts, postId);
  const container = document.querySelector("#displayPosts");
  if (container) {
    renderPostTemplateOtherUsers(post, container, userName);
  }
}

export async function singlePostFetchOtherUsersNoButton(postId, author) {
  const post = await fetchData(apiPath, apiPosts, postId);
  console.log(post);
  console.log(author);
  const container = document.querySelector("#displayPosts");
  if (container) {
    renderIndividualPostTemplate(post, container, author);
  }
}

export function displayUserPosts(user) {
  user.posts.forEach((post) => {
    singlePostFetch(post.id);
  });
}

export function displayOtherUserPosts(user, userName) {
  user.posts.forEach((post) => {
    singlePostFetchOtherUsers(post.id, userName);
  });
}

export async function selectDeleteButtons() {
  const deleteButton = document.querySelectorAll("#deleteButton");

  deleteButton.forEach((button) => {
    button.addEventListener("click", deletePost);
  });

  function deletePost() {
    let postId = this.dataset.id;
    removePost(postId);
  }
}
