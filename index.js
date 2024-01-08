// Example code using Imgflip API to get a random meme template
async function getRandomMemeTemplate() {
  const apiUrl = "https://api.imgflip.com/get_memes";

  const response = await fetch(apiUrl);
  const data = await response.json();

  // Assuming 'data.data.memes' is an array of meme templates
  const randomTemplate =
    data.data.memes[Math.floor(Math.random() * data.data.memes.length)];

  return randomTemplate;
}

// Example usage
getRandomMemeTemplate()
  .then((template) => {
    document.querySelector(
      ".output"
    ).innerHTML = `<img src="${template.url}" />`;
  })
  .catch((error) => console.error("Error:", error));
