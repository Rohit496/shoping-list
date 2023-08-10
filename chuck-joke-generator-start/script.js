const jokeDiv = document.querySelector("#joke");
const jokeBtn = document.querySelector("#joke-btn");

function generateJoke() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./emoji.json", true);
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(this.responseText);
      const random = Math.floor(Math.random() * data.length);
      jokeDiv.innerHTML = data[random].emoji;
      // increase the size of the emoji
      jokeDiv.style.fontSize = "6rem";
      // jokeDiv.style.color = "red";
      // jokeDiv.style.textAlign = "center";

      // jokeDiv.innerHTML = data.value;
    } else {
      jokeDiv.innerHTML = `<strong style='color:red'>Error something went wrong... </strong>`;
    }
  };
  xhr.send();
}

jokeBtn.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);
