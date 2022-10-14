// Template functions for visually displaying posts

export function postTemplateFeed(postData) {
  const post = document.createElement("div");
  post.classList.add("row", "border", "m-2", "p-3");
  post.innerHTML = `<div class="col"> <img src="${postData.media}" height="100"> </div> 
  <div class="col"> <h2>${postData.title}</h2> <a href="friend.html?name=${postData.author.name}"><h6>${postData.author.name}</h6></a> <h8>${postData.created}</h8> <p>${postData.body}</p> </div> `;
  return post;
}

export function postTemplateUser(postData) {
  const post = document.createElement("div");
  post.classList.add("row", "border", "m-2", "p-3");
  post.innerHTML = `<div class="col"> <img src="${postData.media}" height="100"> </div> 
  <div class="col"> <h2>${postData.title}</h2> <h5>${postData.created}</h5> <p>${postData.body}</p> </div> 
  <div class="row m-auto">
  <button id="deleteButton" data-id="${postData.id}" class="btn btn-primary col m-2"> Delete </button> <a class="col" href="edit.html?id=${postData.id}"> <button class="btn btn-secondary w-100 m-2"> Edit </button></a>
  </div>
  `;
  return post;
}

export function postTemplateOtherUsers(postData) {
  const post = document.createElement("div");
  post.classList.add("row", "border", "m-2", "p-3");
  post.innerHTML = `<div class="col"> <img src="${postData.media}" height="100"> </div> 
  <div class="col"> <h2>${postData.title}</h2> <h5>${postData.created}</h5> <p>${postData.body}</p> </div> 
  `;
  return post;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplateUser(postData));
}

export function renderPostTemplateOtherUsers(postData, parent) {
  parent.append(postTemplateOtherUsers(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateFeed));
}
