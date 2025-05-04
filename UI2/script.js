let btn = document.getElementById("submitBtn")
let input = document.getElementById("usernameInput")
let img = document.getElementById("avatar")
let src = img.getAttribute("src")
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
    input1 = input.value.trim();
    getprofiledata(input1).then(function(data){
      src = data.
    })
    })