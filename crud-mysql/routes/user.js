const express = require('express');
const router = express.Router();
const db = require('../db');

const getUsers = (callback) => {
  const consulta = 'SELECT id, nombre, correo FROM users ORDER BY id DESC';

  db.query(consulta, (err, results) => {
    if (err) {
      return callback(err, null);
    }

    callback(null, results || []);
  });
};

router.get('/', (req, res) => {
  getUsers((err, users) => {
    if (err) {
      console.error('Error al consultar usuarios:', err.message);
      return res.status(503).render('index', {
        users: [],
        error: 'No se pudo conectar a la base de datos. Revisa la configuración de MySQL.',
        success: null
      });
    }

    res.render('index', {
      users,
      error: null,
      success: null
    });
  });
});

router.post('/add', (req, res) => {
  const nombre = req.body.nombre?.trim();
  const correo = req.body.correo?.trim();

  if (!nombre || !correo) {
    return res.status(400).json({ error: 'Nombre y correo son obligatorios' });
  }

  const validateQuery = 'SELECT id FROM users WHERE correo = ? LIMIT 1';
  const insertQuery = 'INSERT INTO users (nombre, correo) VALUES (?, ?)';

  db.query(validateQuery, [correo], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al validar el correo' });
    }

    if (results.length > 0) {
      return res.status(400).json({ error: 'El correo ya está registrado, captura otro correo' });
    }

    db.query(insertQuery, [nombre, correo], (insertErr) => {
      if (insertErr) {
        console.error(insertErr);

        if (insertErr.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ error: 'El correo ya está registrado' });
        }

        return res.status(500).json({ error: 'Error al agregar el usuario' });
      }

      res.json({ mensaje: 'Usuario agregado correctamente' });
    });
  });
});

router.get('/edit/:id', (req, res) => {
  const consulta = 'SELECT id, nombre, correo FROM users WHERE id = ?';

  db.query(consulta, [req.params.id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error al buscar usuario');
    }

    if (results.length === 0) {
      return res.status(404).send('Usuario no encontrado');
    }

    res.render('edit', {
      user: results[0]
    });
  });
});

router.post('/edit/:id', (req, res) => {
  const nombre = req.body.nombre?.trim();
  const correo = req.body.correo?.trim();

  if (!nombre || !correo) {
    return res.status(400).json({ error: 'Nombre y correo son obligatorios' });
  }

  const duplicateQuery = 'SELECT id FROM users WHERE correo = ? AND id <> ? LIMIT 1';
  const query = 'UPDATE users SET nombre = ?, correo = ? WHERE id = ?';

  db.query(duplicateQuery, [correo, req.params.id], (duplicateErr, results) => {
    if (duplicateErr) {
      console.error(duplicateErr);
      return res.status(500).json({ error: 'Error al validar el correo' });
    }

    if (results.length > 0) {
      return res.status(400).json({ error: 'El correo ya está registrado por otro usuario' });
    }

    db.query(query, [nombre, correo, req.params.id], (err) => {
      if (err) {
        console.error(err);
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ error: 'El correo ya está registrado por otro usuario' });
        }
        return res.status(500).json({ error: 'Error al actualizar el usuario' });
      }

      res.json({ mensaje: 'Usuario actualizado correctamente' });
    });
  });
});

router.post('/delete/:id', (req, res) => {
  const query = 'DELETE FROM users WHERE id = ?';

  db.query(query, [req.params.id], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error al eliminar el usuario');
    }

    res.redirect('/');
  });
});

module.exports = router;
