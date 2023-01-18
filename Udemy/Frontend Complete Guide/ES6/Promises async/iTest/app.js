// Global variables for each section:

const usersContent = document.querySelector(".users");
const postsContent = document.querySelector(".posts");
const commentsContent = document.querySelector(".comments");

// Users Fetching and crating data:

const createUser = (user) => {
  return ` 
    <div class="card">
        <h4 id="userName">${user.name}</h4>
        <p id="email">${user.email}</p>
        <details id="address">
            <summary>Address</summary>
            <li class="addressDetails">Street: <span>${user.address.street}</span></li>
            <li class="addressDetails">Suite: <span>${user.address.suite}></li>
            <li class="addressDetails">City: <span>${user.address.city}</span></li>
            <li class="addressDetails">Zipcode: <span>${user.address.zipcode}</span></li>
        </details>
    </div>`;
};

const getUsersData = async () => {
  try {
    const resUser = await fetch("https://jsonplaceholder.typicode.com/users");
    const user = await resUser.json();

    user.map((eachUser) => {
      usersContent.innerHTML += createUser(eachUser);
    });
  } catch (error) {
    alert(error);
  }
};

// Posts Fetching and crating data:

const createPost = (post) => {
  return ` 
    <div class="card">
        <h4 id="userName">User ID: ${post.userId}</h4>
        <p id="email">Post ID: ${post.id}</p>
        <details id="address">
            <summary>Content</summary>
            <li class="addressDetails">Title: <span>${post.title}</span></li>
            <li class="addressDetails">Body: <span>${post.body}></li>
        </details>
    </div>`;
};

const getPostsData = async () => {
  try {
    const resPost = await fetch("https://jsonplaceholder.typicode.com/posts");
    const post = await resPost.json();

    post.map((eachPost) => {
      postsContent.innerHTML += createPost(eachPost);
    });
  } catch (error) {
    alert(error);
  }
};

// Comments Fetching and crating data:

const createComment = (comment) => {
  return ` 
    <div class="card">
        <h4 id="userName">Comment ID: ${comment.id}</h4>
        <p id="email">${comment.email}</p>
        <details id="address">
            <summary>Comment</summary>
            <li class="addressDetails">Name: <span>${comment.name}</span></li>
            <li class="addressDetails">Body: <span>${comment.body}</span></li>
        </details>
    </div>`;
};

const getCommentsData = async () => {
  try {
    const resComment = await fetch(
      "https://jsonplaceholder.typicode.com/comments?postId=1"
    );
    const comment = await resComment.json();

    comment.map((eachComment) => {
      commentsContent.innerHTML += createComment(eachComment);
    });
  } catch (error) {
    alert(error);
  }
};

// Invoking the functions:
getUsersData();
getPostsData();
getCommentsData();
