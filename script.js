const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = formulario.Nombre.value;
  const correo = formulario.Correo.value;
  const telefono = formulario.Telefono.value;
  const mensaje = formulario.Mensaje.value;

  const texto = `🌸 Nuevo mensaje desde la página web

👤 Nombre: ${nombre}
📧 Correo: ${correo}
📱 Teléfono: ${telefono}

💬 Mensaje:
${mensaje}`;

  window.open(
    `https://wa.me/573053584095?text=${encodeURIComponent(texto)}`,
    "_blank"
  );

  document.getElementById("mensajeExito").style.display = "block";

  setTimeout(() => {
    formulario.submit();
  }, 1000);
});

function cerrarMensaje() {
  document.getElementById("mensajeExito").style.display = "none";
}
