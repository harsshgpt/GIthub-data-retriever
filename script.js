

const githubForm = document.getElementById('github-form');
const usernameInput = document.getElementById('github-username');
const repoSelect = document.getElementById('repo-select');
const summaryResult = document.getElementById('summary-result');
const summaryText = document.getElementById('summary-text');
const profileImg = document.getElementById('profile-img');
const profileName = document.getElementById('profile-name');
const profileBio = document.getElementById('profile-bio');
const profileLocation = document.getElementById('profile-location');
const profileRepos = document.getElementById('profile-repos');

// GitHub API: Fetch User Profile
async function getGitHubProfile(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (response.ok) {
        const profile = await response.json();
        return profile;
    } else {
        alert('Error fetching profile');
        return null;
    }
}


async function getGitHubRepos(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (response.ok) {
        const repos = await response.json();
        return repos;
    } else {
        alert('Error fetching repositories');
        return [];
    }
}

// OpenAI API: Summarize README content
async function summarizeWithGPT(content) {
    const response = await fetch('/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: content })
    });

    const data = await response.json();
    return data.summary;
}

// Fetch and populate repository list
usernameInput.addEventListener('blur', async () => {
    const username = usernameInput.value.trim();
    if (username) {
        const profile = await getGitHubProfile(username);
        if (profile) {
            // Display profile details in the card
            profileImg.src = profile.avatar_url;
            profileName.textContent = profile.name || profile.login;
            profileBio.textContent = `Bio: ${profile.bio || 'No bio available'}`;
            profileLocation.textContent = `Location: ${profile.location || 'Not provided'}`;
            profileRepos.textContent = `Public Repos: ${profile.public_repos}`;

            // Fetch repositories
            const repos = await getGitHubRepos(username);
            if (repos.length > 0) {
                repoSelect.disabled = false;
                repoSelect.innerHTML = `<option value="">Select a repository</option>`;
                repos.forEach((repo) => {
                    const option = document.createElement('option');
                    option.value = repo.url;
                    option.textContent = repo.name;
                    repoSelect.appendChild(option);
                });
            }
        }
    }
});

// Handle form submission
githubForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const repoUrl = repoSelect.value;
    if (!repoUrl) {
        alert('Please select a repository');
        return;
    }

    // Fetch README from selected repo
    const response = await fetch(`${repoUrl}/contents/README.md`);
    const readmeContent = await response.json();
    const decodedContent = atob(readmeContent.content);  // Decode base64 content
    
    // Summarize using GPT
    const summary = await summarizeWithGPT(decodedContent);

    summaryResult.style.display = 'block';
    summaryText.textContent = summary;
});
