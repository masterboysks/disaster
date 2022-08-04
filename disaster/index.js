const nav = document.getElementById("nav-list");
const menuBtn = document.getElementById("menu");
const textChange = document.getElementById("change-text");
const button = document.getElementById("btn");

let counter = 0;
let text = [
  "Become a part of something good.",
  "Help us help the needy.",
  "And help us make our Country a better place.",
];
menuBtn.addEventListener("click", () => {
  nav.classList.contains("hidden")
    ? nav.classList.remove("hidden")
    : nav.classList.add("hidden");
});
const menuToggle = () => {
  nav.classList.contains("hidden")
    ? nav.classList.remove("hidden")
    : nav.classList.add("hidden");
};
setInterval(() => {
  if (counter === 2) {
    counter = 0;
  } else {
    counter++;
  }
  textChange.innerHTML = text[counter];
}, 3000);
const btn = (e) => {
  e.preventdefault();
};
