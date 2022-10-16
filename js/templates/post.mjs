// Template functions for visually displaying posts

export function postTemplateFeed(postData) {
  const date = `${
    postData.created.slice(8, 10) +
    "-" +
    postData.created.slice(5, 7) +
    "-" +
    postData.created.slice(0, 4) +
    " " +
    postData.created.slice(11, 19)
  }`;
  const post = document.createElement("div");
  post.classList.add("row", "border", "rounded-4", "shadow-lg", "m-2", "p-3");
  post.innerHTML = `<div class="col"> <img class="img-fluid rounded-4" src="${postData.media}" height="100"> </div> 
  <div class="col card rounded-4 shadow-lg text-start"> <h2>${postData.title}</h2> <a href="friend.html?name=${postData.author.name}"><h6>${postData.author.name}</h6></a> <p>${date}</p> <p>${postData.body}</p> </div>
  <div class="text-end"> <a href="post.html?id=${postData.id}&author=${postData.author.name}"> <button class="btn btn-secondary mt-4"> View Post </button></a> </div> `;
  return post;
}

export function postTemplateUser(postData) {
  const date = `${
    postData.created.slice(8, 10) +
    "-" +
    postData.created.slice(5, 7) +
    "-" +
    postData.created.slice(0, 4) +
    " " +
    postData.created.slice(11, 19)
  }`;
  const post = document.createElement("div");
  post.classList.add("row", "border", "rounded-4", "shadow-lg", "m-2", "p-3");
  post.innerHTML = `<div class="col"> <img class="img-fluid rounded-4 shadow-lg" src="${postData.media}" height="100"> </div> 
  <div class="col card rounded-4 shadow-lg text-start"> <h2>${postData.title}</h2> <p>${date}</p> <p>${postData.body}</p> </div> 
  <div class="row">
  <button id="deleteButton" data-id="${postData.id}" class="btn btn-primary col m-2"> Delete </button> <a class="col" href="edit.html?id=${postData.id}"> <button class="btn btn-secondary w-100 m-2"> Edit </button></a>
  </div>
  `;
  return post;
}

export function postTemplateUserNoButton(postData, author) {
  const date = `${
    postData.created.slice(8, 10) +
    "-" +
    postData.created.slice(5, 7) +
    "-" +
    postData.created.slice(0, 4) +
    " " +
    postData.created.slice(11, 19)
  }`;
  const post = document.createElement("div");
  post.classList.add("row", "border", "rounded-4", "shadow-lg", "m-2", "p-3");
  post.innerHTML = `<div class="col"> <img class="img-fluid rounded-4" src="${postData.media}" height="100"> </div> 
  <div class="col card rounded-4 shadow-lg text-start"> <h2>${postData.title}</h2> <a href="friend.html?name=${author}"><h6>${author}</h6></a> <p>${date}</p> <p>${postData.body}</p> </div> `;
  return post;
}

export function postTemplateOtherUsers(postData, author) {
  const date = `${
    postData.created.slice(8, 10) +
    "-" +
    postData.created.slice(5, 7) +
    "-" +
    postData.created.slice(0, 4) +
    " " +
    postData.created.slice(11, 19)
  }`;
  const post = document.createElement("div");
  post.classList.add("row", "border", "rounded-4", "shadow-lg", "m-4", "p-3");
  post.innerHTML = `<div class="col"> <img class="img-fluid rounded-4" src="${postData.media}" height="100"> </div> 
  <div class="col card rounded-4 shadow-lg text-start"> <h2>${postData.title}</h2> <p>${date}</p> <p>${postData.body}</p> </div> 
  <div class="text-end"> <a href="post.html?id=${postData.id}&author=${author}"> <button class="btn btn-secondary m-2"> View Post </button></a> </div> `;
  return post;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplateUser(postData));
}

export function renderIndividualPostTemplate(postData, parent, author) {
  parent.append(postTemplateUserNoButton(postData, author));
}

export function renderPostTemplateOtherUsers(postData, parent, author) {
  parent.append(postTemplateOtherUsers(postData, author));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateFeed));
}
