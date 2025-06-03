// Cambiar tema
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// Validadar del formulario
document.getElementById("registro-form").addEventListener("submit", function (e) {
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const carrera = document.getElementById("carrera").value.trim();

  if (!nombre || !correo || !carrera) {
    alert("Por favor, completa todos los campos.");
    e.preventDefault();
  }
});

// Participantes aleatorios en carga
window.addEventListener("DOMContentLoaded", () => {
  fetch("https://randomuser.me/api/?results=5")
    .then(response => response.json())
    .then(data => {
      const contenedor = document.getElementById("lista-participantes");
      data.results.forEach(user => {
        const div = document.createElement("div");
        div.classList.add("participante");
        div.innerHTML = `
          <img src="${user.picture.medium}" alt="${user.name.first}" />
          <p>${user.name.first} ${user.name.last}</p>
        `;
        contenedor.appendChild(div);
      });
    });
});
