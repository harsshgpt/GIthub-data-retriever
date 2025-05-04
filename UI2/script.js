function fetchuserprofile(){
    fetch("https://api.github.com/users/harsshgpt").then(res=>res.json()).then((res)=>console.log(res))
}
fetchuserprofile();