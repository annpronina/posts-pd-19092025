const btn = document.getElementById("btn");

async function changeNumber(){
    const res = await fetch("");
    const data = await res.json();
    
    console.log(data);
}