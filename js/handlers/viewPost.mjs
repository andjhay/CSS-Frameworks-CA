import { singlePostFetchOtherUsersNoButton } from "../main_pages/posts.mjs";

const url = new URL(location.href);
const author = `${url.searchParams.get("author")}`;
const postId = `${url.searchParams.get("id")}?_comments=true&_reactions=true`;

singlePostFetchOtherUsersNoButton(postId, author);
