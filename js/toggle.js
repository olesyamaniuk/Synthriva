function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const buttonImg = element.querySelector(".toggle-button img");

  answer.classList.toggle("open");

  if (answer.classList.contains("open")) {
    buttonImg.src = "/img/Plus (1).png";
    buttonImg.classList.add("rotated");
  } else {
    buttonImg.src = "/img/Plus.png";
    buttonImg.classList.remove("rotated");
  }
}
