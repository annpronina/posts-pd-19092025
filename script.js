const btn = document.getElementById("btn");
const status = document.getElementById("status");
const posts = document.getElementById("posts-list")
const number = document.getElementById("number");

async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    console.log(data);
}

function postList() {

}

btn.addEventListener("click", getPosts);