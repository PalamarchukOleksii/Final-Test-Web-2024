document.getElementById("home-link").addEventListener("click", function () {
  document.getElementById("main-heading").textContent =
    "Ласкаво просимо на головну сторінку!";
});

document.getElementById("about-link").addEventListener("click", function () {
  document.getElementById("main-heading").textContent =
    "Дізнайтеся більше про нас!";
});

document.getElementById("services-link").addEventListener("click", function () {
  document.getElementById("main-heading").textContent = "Ось що ми пропонуємо!";
});

document.getElementById("contact-link").addEventListener("click", function () {
  document.getElementById("main-heading").textContent = "Зв'яжіться з нами!";
});
