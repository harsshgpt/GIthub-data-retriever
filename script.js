let bt = document.querySelector("button");
let h = document.querySelector("h1");

bt.addEventListener("click",()=>{
    fetch("https://api.github.com/users/harsshgpt").then(res=>res.json()).then((res)=>{h.innerText = res.name })
})