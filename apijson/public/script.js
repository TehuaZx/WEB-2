const table = document.getElementById('table');
const form = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const submitButton = form.querySelector('button[type="submit"]');

let editando = false;
let usuarioId = null;

async function cargarUsuarios() {
    const res = await fetch('/api/usuarios');
    const datos = await res.json();
    table.innerHTML = '';

    datos.forEach((u) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${u.id}</td>
            <td>${u.nombre}</td>
            <td>${u.correo}</td>
            <td>
                <button type="button" onclick="llenarFormulario(${u.id}, '${u.nombre.replace(/'/g, "\\'")}', '${u.correo.replace(/'/g, "\\'")}')">Editar</button>
                <button type="button" onclick="eliminar(${u.id})">Eliminar</button>
            </td>
        `;

        table.appendChild(row);
    });
}

function llenarFormulario(id, nombreValor, correoValor) {
    nombre.value = nombreValor;
    correo.value = correoValor;
    usuarioId = id;
    editando = true;

    submitButton.textContent = 'Actualizar';
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const datos = {
        nombre: nombre.value.trim(),
        correo: correo.value.trim(),
    };

    if (!datos.nombre || !datos.correo) {
        return;
    }

    if (editando && usuarioId !== null) {
        await fetch(`/api/usuarios/${usuarioId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos),
        });
    } else {
        await fetch('/api/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos),
        });
    }

    form.reset();
    editando = false;
    usuarioId = null;
    submitButton.textContent = 'Agregar';
    await cargarUsuarios();
});

async function eliminar(id) {
    if (confirm('¿Eliminar usuario?')) {
        await fetch(`/api/usuarios/${id}`, { method: 'DELETE' });
        await cargarUsuarios();
    }
}

cargarUsuarios();