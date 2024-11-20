// Inicializa el lottle de la imagen de perfil animada
console.log("La pagina esta conectada a Javascript");

const select = document.getElementById("technology");
const cards = document.querySelectorAll(".card-logo");

select.addEventListener("change", (e) => {
  const selectedValue = e.target.value;
  console.log(selectedValue)

  cards.forEach((card) => {
    console.log("Clase de tarjeta:", card.classList);
    // Mostrar todos con all
    if (selectedValue === "all") {
      card.classList.remove("hidden");
    } else {
      // ocultar o mostrar la clase
      if (card.classList.contains(selectedValue)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    }
  });
});

/* 
let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header")

menu.onclick = () => {
  menu.classList.toggle("fa-times")
  header.classList.toggle("active")
}
 */
/* Ocultar menu */

/* document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar a")
  const header = document.querySelector(".header")
  const menu = document.querySelector("#menu-btn");


  menu.onclick = () => {
    menu.classList.toggle("fa-times")
    header.classList.toggle("active")

    if (menu.classList.contains("fa-times")) {
      header.classList.add("hidden")
    } else {
      document.classList.remove("hidden")
    }
  }

}) */

/* let themeToggler = document.querySelector("#theme-toggler")

themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-sun")

  if (themeToggler.classList.contains("fa-sun")) {
    document.body.classList.add("active")
  }
  else {
    document.body.classList.remove("active")
  }
}
 */
