const { response, request } = require('express')

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'inventorydb',
  password: 'my-postgres',
  port: 5432,

  // access to ADB database
  // user:'nithires_admin',
  // host:'vps.nithiresearch.com',
  // database:'nithires_aims',
  // password:'Pass12#$word',
  // port:5432,
})

const getUsers = (request, response) => {
  // pool.query('SELECT * FROM "app_user" ORDER BY user_id ASC', (error, results) => {
  pool.query('SELECT * FROM "app_user"', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const user_id = parseInt(request.params.user_id)

  pool.query('SELECT * FROM "app_user" WHERE user_id = $1', [user_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { user_id, given_name, family_name, user_password, user_email, user_phone, user_type, user_role_id, user_department_id } = request.body

  pool.query('INSERT INTO "app_user" (user_id, given_name, family_name, user_password, user_email, user_phone, user_type, user_role_id, user_department_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)', [user_id, given_name, family_name, user_password, user_email, user_phone, user_type, user_role_id, user_department_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User add with ID: ${result.insertId}`)
  })
}

const updateUser = (request, response) => {
  const user_id = parseInt(request.params.id)
  const { user_phone } = request.body

  pool.query('UPDATE "app_user" SET user_phone = $1 WHERE user_id = $2', [user_phone], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User modified with ID: ${user_id}`)
  })
}

const deleteUser = (request, response) => {
  const user_id = parseInt(request.params.id)

  pool.query('DELETE FROM "app_user" WHERE user_id = $1', [user_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`ser deleted with ID: ${user_id}`)
  })
}

const loginByUser = (username, password) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM "app_user" WHERE user_name = $1 and user_password = $2', [username, password], (error, results) => {
      if (error) {
        throw error
      }
      // match
      // if (row.length ===0 ) {
      //    throw (401 error)
      // }
      // console.log(results);
      const userInfor = results.rows[0];
      resolve(userInfor);
    });
  });
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginByUser
}