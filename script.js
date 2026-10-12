const themeBtn = document.querySelector("#themeBtn");
const greetBtn = document.querySelector("#greetBtn");
const nameInput = document.querySelector("#nameInput");
const greeting = document.querySelector("#greeting");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeBtn.textContent = isDark ? "☀️ Светлая тема" : "🌙 Тёмная тема";
});

function greet(name) {
  if (name === "") {
    return "Привет, гость!";
  } else {
    return "Привет, " + name + "!";
  }
}

let clicks = 0;
greetBtn.addEventListener("click", function () {
  clicks++;
  greeting.textContent = greet(nameInput.value.trim());
  greetBtn.textContent = "Поздороваться (" + clicks + ")";
});
