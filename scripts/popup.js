$(document).ready(function() {
const openButton = document.querySelector("#openOverlay");
const reviews = document.querySelector(".reviews");
const successOverlay = openOverlay("Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным. Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.");

openButton.addEventListener("click", function() {
  document.body.appendChild(successOverlay);
});

function openOverlay(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const containerElement = document.createElement("div");
  containerElement.classList.add("container__popup");

  const contentElement = document.createElement("div");
  contentElement.classList.add("content__popup");
  contentElement.innerHTML = content;

  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = "x";
  closeElement.href = "#";
  closeElement.addEventListener("click", function() {
    document.body.removeChild(overlayElement);
  });

  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  containerElement.appendChild(contentElement);

  return overlayElement;
}
});