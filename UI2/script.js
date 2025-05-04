// let btn = document.getElementById("submitBtn")
// let input = document.getElementById("usernameInput")
// let img = document.querySelector("img")

// let name = document.getElementById("name");
// let username = document.getElementById("username")
// const bio = document.getElementById("bio")
// const repos = document.getElementById("repos");
// const followers = document.getElementById("followers");
// const following = document.getElementById("following");
// const locationEl = document.getElementById("location");

// function getprofiledata (username){
//     return fetch(`https://api.github.com/users/${username}`).then((raw) => {
//         if(!raw.ok) throw new Error("User not found")
//         return raw.json();
//     });
// }

// btn.addEventListener("click",function(){
//     input1 = input.value.trim();
//     getprofiledata(input1).then(function(data){
//         img.src= data.avatar_url;
//         name.innerText = data.name;
//         username.innerText = data.login;
//         bio.innerText = data.bio;
//         repos.innerText = data.public_repos;
//         followers.innerText = data.followers;
//         following.innerText = data.following;
//         locationEl.innerText = data.location;
        
    
      
//     })
//     })
let btn = document.getElementById("submitBtn");
let input = document.getElementById("usernameInput");
let img = document.querySelector("img");

let name = document.getElementById("name");
let usernameEl = document.getElementById("username");
const bio = document.getElementById("bio");
const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const locationEl = document.getElementById("location");

function getprofiledata(username) {
    return fetch(`https://api.github.com/users/${username}`).then((raw) => {
        if (!raw.ok) throw new Error("User not found");
        return raw.json();
    });
}

btn.addEventListener("click", function () {
    const input1 = input.value.trim();
    getprofiledata(input1).then(function (data) {
        img.src = data.avatar_url;
        name.innerText = data.name;
        usernameEl.innerText = data.login;
        bio.innerText = data.bio;
        repos.innerText = data.public_repos;
        followers.innerText = data.followers;
        following.innerText = data.following;
        locationEl.innerText = data.location;

        document.getElementById("profileContainer").classList.remove("hidden");
    });
});
