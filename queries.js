const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'inventorydb',
    password:'postgres',
    port:5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM app_user ORDER BY user_id ASC', (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}  

const getUserById = (request, response) => {
    const user_id = parseInt(request.params.user_id)

    pool.query('SELECT * FROM app_user WHERE user_id = $1', [user_id], (error, results)=> {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const {user_id, given_name, family_name, user_password, user_email, user_phone, user_type, user_role_id, user_department_id} = request.body

    pool.query('INSERT INTO app_user (user_id, given_name, family_name, user_password, user_email, user_phone, user_type, user_role_id, user_department_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)', [user_id, given_name, family_name, user_password, user_email, user_phone, user_type, user_role_id, user_department_id], (error, results)=> {
        if(error){
            throw error
        }
        response.status(201).send('User add with ID: ${result.insertId}')
    })
}

const updateUser = (request, response) => {
    const user_id = parseInt(request.params.id)
    const {user_phone} = request.body
    
    pool.query('UPDATE app_user SET user_phone = $1 WHERE user_id = $2', [user_phone], (error, results)=> {
        if(error){
            throw error
        }
        response.status(200).send('User modified with ID: ${user_id}')
    })
}

const deleteUser = (request, response) => {
    const user_id = parseInt(request.params.id)
    
    pool.query('DELETE FROM app_user WHERE user_id = $1', [user_id], (error, results)=> {
        if(error){
            throw error
        }
        response.status(200).send('User deleted with ID: ${user_id}')
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}