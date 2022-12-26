const { v4: uuid } = require('uuid');
const { Router } = require('express');
const connection = require('../db/db');

const roles = Router();

const hex = (buffer) => buffer.toString('hex');

const sql = {
  getAllRoles: 'SELECT * FROM role',
  createRole: `INSERT INTO role(id, name) VALUES (unhex(?), ?)`,

  getRole: `SELECT * FROM role WHERE id = unhex(?)`,
  updateRole: `UPDATE role SET name = ? WHERE id = unhex(?)`,
  deleteRole: `DELETE FROM role WHERE id = unhex(?)`,
};

const getRole = (res, id) => {
  const sqlStatement = connection.format(sql.getRole, id);
  connection.execute(sqlStatement, (err, [role]) => {
    if (err) {
      return res.status(500).json({
        message: 'Error on server. Try later!',
      });
    }
    if (!role) {
      return res.status(404).json({
        message: 'No role found. Check id.',
      });
    }
    res.status(200).send({ data: { ...role, id: hex(role.id) }});
  });
};

roles.route('/role')
  .get((req, res) => {
    connection.execute(sql.getAllRoles, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: 'Error on server. Try later!',
        });
      }
      const allRoles = result.map(({ id, name }) => ({ name, id: hex(id) }));
      res.status(200).send({ data: allRoles });
    });
  })
  .post((req, res) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({
        message: 'All fields are required!',
      });
    }
    const id = uuid().replaceAll('-', '');
    const sqlStatement = connection.format(sql.createRole, [id, name]);
    connection.execute(sqlStatement, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: 'Error on server. Try later!',
        });
      }
      res.status(200).send({ data: result });
    });
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation is not supported on /role/');
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation is not supported on /role/');
  });

roles.route('/role/:id')
  .get((req, res) => {
    const { id } = req.params;
    getRole(res, id);
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation is not supported on /role/${req.params.id}`);
  })
  .put((req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const sqlStatement = connection.format(sql.updateRole, [name, id]);
    connection.execute(sqlStatement, (err, result) => {
      if (err || !result.affectedRows) {
        return res.status(500).json({
          message: 'Error on server. Try later!',
        });
      }
      getRole(res, id);
    });
  })
  .delete((req, res) => {
    const { id } = req.params;
    getRole(res, id);
    const sqlStatement = connection.format(sql.deleteRole, id);
    connection.execute(sqlStatement, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: 'Error on server. Try later!',
        });
      }
    });
  });

module.exports = roles;
