const menu = document.querySelector(".menu");
const mobile = document.querySelector(".mobile-nav");


// MOBILE MENU

menu.addEventListener("click", () => {

  mobile.classList.toggle("open");

  const isOpen = mobile.classList.contains("open");

  menu.setAttribute("aria-expanded", isOpen);

  menu.textContent = isOpen ? "✕" : "☰";

});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

document.querySelectorAll(".mobile-nav a").forEach((link) => {

  link.addEventListener("click", () => {

    mobile.classList.remove("open");

    menu.setAttribute("aria-expanded", "false");

    menu.textContent = "☰";

  });

});


// CURRENT YEAR

document.getElementById("year").textContent =
  new Date().getFullYear();


// CLOSE MENU WHEN CLICKING OUTSIDE

document.addEventListener("click", (event) => {

  if (
    mobile.classList.contains("open") &&
    !mobile.contains(event.target) &&
    !menu.contains(event.target)
  ) {

    mobile.classList.remove("open");

    menu.setAttribute("aria-expanded", "false");

    menu.textContent = "☰";

  }

});
