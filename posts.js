const listElement = document.querySelector("#post-list");
const detailElement = document.querySelector("#post-detail");
const commentListElement = document.querySelector("#comment-list");
const btnRefresh = document.querySelector("#reload-posts");

let posts = [];

function showPosts() {
  listElement.textContent = "";
  for (let i = 0; i < posts.length; i = i + 1) {
    const post = document.createElement("li");
    post.textContent = posts[i].title;

    post.addEventListener("click", function () {
      const item = document.querySelectorAll("#post-list li");
      for (let j = 0; j < item.length; j = j + 1) {
        item[j].classList.remove("selected");
      }
      post.classList.add("selected");
      detailElement.textContent = posts[i].title + " — " + posts[i].body;
      loadComments(posts[i].id);
    });

    listElement.appendChild(post);
  }
}

async function loadComments(postId) {
  try {
    commentListElement.textContent = "";
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + postId + "/comments"
    );
    if (!response.ok) {
      throw new Error("Błąd odczytu");
    }
    const data = await response.json();
    for (let k = 0; k < data.length; k = k + 1) {
      const comment = document.createElement("li");
      comment.textContent =
        data[k].name + " — " + data[k].email + " — " + data[k].body;
      commentListElement.appendChild(comment);
    }
  } catch (error) {
    commentListElement.textContent = "Błąd";
  }
}

async function loadPosts() {
  try {
    listElement.textContent = "Ładowanie...";
    detailElement.textContent = "";
    commentListElement.textContent = "";
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Nie można załadować postów");
    }
    const data = await response.json();
    posts = data.slice(0, 10);
    showPosts();
  } catch (error) {
    listElement.textContent = "Błąd ładowania";
    detailElement.textContent = "";
    commentListElement.textContent = "";
  }
}

btnRefresh.addEventListener("click", function () {
  loadPosts();
});

loadPosts();
