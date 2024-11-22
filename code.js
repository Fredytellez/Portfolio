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

/* emailjs notifications */

const btn = document.getElementById('btn');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_gz1by6x';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'envía solicitud';
      alert('Tu notificación fue enviada!');
    }, (err) => {
      btn.value = 'envía solicitud';
      alert(JSON.stringify(err));
    });
});