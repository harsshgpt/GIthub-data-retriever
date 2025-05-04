function getprofiledata (username){
    fetch(`https://api.github.com/users/${username}`).then(raw => {
        if(!raw.ok) alert("user not found");
        return raw.json();
    })

}
let a = getprofiledata("harsshgpt");
console.log(a)