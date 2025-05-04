function getprofiledata (username){
    return fetch(`https://api.github.com/users/${username}`).then((raw) => {
        if(!raw.ok) throw new Error("User not found")
        return raw.json();
    });

}
function getrepo(username){
  return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then(raw => raw.json())
}
 getrepo("harsshgpt").then(function(data){
    console.log(data)
 })
