function loadComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((comments) => displayComments(comments));
}

function displayComments(comments) {
    const commentsContainer = document.getElementById("comments-container");
    for(const comment of comments) {
        console.log(comment);
        const commentDiv = document.createElement("div");
        commentDiv.innerHTML = `
        <h4>Comment no. ${comment.id}</h4>
        <h3>Comment Title: ${comment.name}</h3>
        <h5>User Email: ${comment.email}</h5>
        <p><em>Comment</em>: ${comment.body}</p>
        `
        commentsContainer.appendChild(commentDiv);
    }
}

loadComments();