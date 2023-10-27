window.addEventListener("scroll", function () {
  let scrollHeight = window.scrollY;
  let nav = document.querySelector("nav");
  let navButton = document.getElementById("getMore");
  if (scrollHeight > 330) {
    nav.classList.add("scrollDownColor");
    navButton.classList.add("scrollDownButtonColor");
    nav.classList.remove("scrollUpColor");
    navButton.classList.remove("scrollUpButtonColor");
  } else {
    nav.classList.add("scrollUpColor");
    navButton.classList.add("scrollUpButtonColor");
    nav.classList.remove("scrollDownColor");
    navButton.classList.remove("scrollDownButtonColor");
  }
});
