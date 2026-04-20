function openLetter() {
  document.getElementById("letter").style.display = "none";

  let paper = document.getElementById("paper");
  paper.classList.remove("hidden");

  setTimeout(() => {
    paper.style.transform = "scaleY(1)";
  }, 100);

  setTimeout(() => {
    document.getElementById("cake").classList.remove("hidden");
  }, 2000);

  setTimeout(() => {
    document.getElementById("candles").classList.remove("hidden");
  }, 350
