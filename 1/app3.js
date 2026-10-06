const form = document.getElementById('userForm');
const salida = document.getElementById('salidaJSON');
const descargarBtn = document.getElementById('descargarBtn');

let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

function mostrarUsuarios() {
  salida.textContent = JSON.stringify(usuarios, null, 2);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();

  if (!nombre || !correo) return;

  const nuevoUsuario = { nombre, correo };
  usuarios.push(nuevoUsuario);

  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  mostrarUsuarios();
  form.reset();
});

descargarBtn.addEventListener('click', function () {
  const contenidoJSON = JSON.stringify(usuarios, null, 2);
  const blob = new Blob([contenidoJSON], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const enlace = document.createElement('a');

  enlace.href = url;
  enlace.download = 'usuarios.json';
  document.body.appendChild(enlace);
  enlace.click();
  enlace.remove();
  URL.revokeObjectURL(url);
});

mostrarUsuarios();
