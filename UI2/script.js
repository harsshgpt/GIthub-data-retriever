let btn = document.getElementById("submitBtn")
let input = document.getElementById("usernameInput")
let img = document.getElementById("avatar")
let name = document.getElementById("name");
let username = document.getElementById("username")
const bio = document.getElementById("bio")
const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const locationEl = document.getElementById("location");

function getprofiledata (username){
    return fetch(`https://api.github.com/users/${username}`).then((raw) => {
        if(!raw.ok) throw new Error("User not found")
        return raw.json();
    });
}

btn.addEventListener("click",function(){
    const user = input.value.trim();
    let details  = 0
    getprofiledata(user).then(function(data){
       img.src =  data.avatar_url;
    })
    
    
})




