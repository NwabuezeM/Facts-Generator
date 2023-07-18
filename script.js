const btn = document.getElementById("btn");
const fact = document.getElementById("fact");
const factContainer = document.getElementById("facts-container");
const spinner = document.getElementById("spinner");

const apiKey = "9onPcqYloKMmV2FoYYQlpnvvk4iJ2rMcqSg7MFmZ";
const options = {
    method: "GET",
    headers: {
        'X-Api-key': apiKey
    },
};

const apiUrl = 'https://api.api-ninjas.com/v1/facts?limit=1';

const getFact = async () => {
try {
    fact.innerText = "Updating...";
    spinner.style.display = "inline-flex"
    factContainer.style.display = "block";
    btn.disabled = true;
    btn.innerText = "Loading...";
    const result = await fetch(apiUrl, options);
    const data = await result.json();
    btn.disabled = false;
    btn.innerText = "Tell Me a Fact";
    fact.innerText = data[0].fact;
    spinner.style.display = "none";
    
} catch (error) {
    btn.disabled = false;
    btn.innerText = "Tell Me a Fact";
    fact.innerText = "An error occurred, try again";
    spinner.style.display = "none";
}
}
btn.addEventListener("click", getFact);