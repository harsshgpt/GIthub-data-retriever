let bt = document.querySelector("button");
bt.addEventListener("click",()=>{
    fetch("https://api.github.com/users/harsshgpt").then(res=>res.json()).then((res)=>console.log(res
        
    ))
})