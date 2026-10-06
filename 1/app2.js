const form = document.getElementById('userForm');
const salida = document.getElementById('salidaJSON');

let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

function mostrarUsuarios() {
  salida.textContent = JSON.stringify(usuarios, null, 2);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();

  if (!nombre || !correo) return;

  usuarios.push({ nombre, correo });
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  mostrarUsuarios();
  form.reset();
});

mostrarUsuarios();