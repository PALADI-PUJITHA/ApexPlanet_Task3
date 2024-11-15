// Carousel Functionality
let currentImageIndex = 0;
const images = document.querySelectorAll(".carousel-image");
images[currentImageIndex].style.display = "block";

document.getElementById("prev").addEventListener("click", () => {
  images[currentImageIndex].style.display = "none";
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  images[currentImageIndex].style.display = "block";
});

document.getElementById("next").addEventListener("click", () => {
  images[currentImageIndex].style.display = "none";
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.display = "block";
});

// Quiz Functionality
function submitQuiz() {
  const question1 = document.getElementById("question1").value;
  const question2 = document.getElementById("question2").value;
  let result = `Your ideal style is: ${question1} & ${question2} style!`;
  document.getElementById("quiz-result").innerText = result;
}

// Fetch Joke from API
async function fetchJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
    const data = await response.json();
    document.getElementById("joke-content").innerText = data.setup + " - " + data.punchline;
  } catch (error) {
    document.getElementById("joke-content").innerText = "Oops! Couldn't load a joke.";
  }
}
