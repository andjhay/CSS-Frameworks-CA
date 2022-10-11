// Template functions for visually displaying posts

export function postTemplateFeed(postData) {
  const post = document.createElement("div");
  post.classList.add("row", "border", "m-2", "p-3");
  post.innerHTML = `<div class="col"> <img src="${postData.media}" height="100"> </div> 
  <div class="col"> <h2>${postData.title}</h2> <h5>${postData.created}</h5> <p>${postData.body}</p> </div> `;
  return post;
}

export function postTemplateUser(postData) {
  const post = document.createElement("div");
  post.classList.add("row", "border", "m-2", "p-3");
  post.innerHTML = `<div class="col"> <img src="${postData.media}" height="100"> </div> 
  <div class="col"> <h2>${postData.title}</h2> <h5>${postData.created}</h5> <p>${postData.body}</p> </div> 
  <div class="row m-auto">
  <button id="deleteButton" data-id="${postData.id}" class="btn btn-primary col m-2"> Delete </button> <button class="btn btn-secondary col m-2"> Edit </button> 
  </div>
  `;
  return post;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplateUser(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateFeed));
}
