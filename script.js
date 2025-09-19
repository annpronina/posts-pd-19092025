const btn = document.getElementById("btn");
const status = document.getElementById("status");
const posts = document.getElementById("posts-list")
const number = document.getElementById("number");

async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    console.log(data);
    postList(data);
}

function postList() {
    return (`${data.title} \n ${data.body}`);
}

btn.addEventListener("click", getPosts);