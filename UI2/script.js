
  const submitBtn = document.getElementById("submitBtn");
  const usernameInput = document.getElementById("usernameInput");
  const profileContainer = document.getElementById("profileContainer");

  const avatar = document.getElementById("avatar");
  const name = document.getElementById("name");
  const username = document.getElementById("username");
  const bio = document.getElementById("bio");
  const repos = document.getElementById("repos");
  const followers = document.getElementById("followers");
  const following = document.getElementById("following");
  const locationEl = document.getElementById("location");

  submitBtn.addEventListener("click", async () => {
    const user = usernameInput.value.trim();

    if (!user) {
      alert("Please enter a GitHub username.");
      return;
    }

    try {
      const res = await fetch(`https://api.github.com/users/${user}`);

      if (!res.ok) {
        alert("User not found. Please enter a valid GitHub username.");
        return;
      }

      const data = await res.json();

      // Populate data into UI
      avatar.src = data.avatar_url;
      name.textContent = data.name || "No Name Provided";
      username.textContent = "@" + data.login;
      bio.textContent = data.bio || "No bio available.";
      repos.textContent = data.public_repos;
      followers.textContent = data.followers;
      following.textContent = data.following;
      locationEl.textContent = data.location || "Unknown";

      profileContainer.classList.remove("hidden");
    } catch (err) {
      alert("Error fetching data. Try again later.");
      console.error(err);
    }
  });

