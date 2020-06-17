const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 5000
const cors = require('cors')

app.use(cors())

// const corsOptions = {
//   origin: 'http://localhost:5000',
//   optionsSuccessStatus: 200
// }

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, Response) => {
  Response.json('You are connecting to the database')
})

app.get('/users', db.getUsers)
app.get('/users/:user_id', db.getUserById)
app.post('/users', db.createUser)
app.post('/login', (request, response) => {
  const { username, password } = request.body;
  db.loginByUser(username, password).then((result) => {
    response.status(200).json(result);
  }).catch ((error) => {
    console.error("print error: ", error);
    response.status(401).send('Unauthorized');
  });
})
app.put('/users/:user_id', db.updateUser)
app.delete('/users:/user_id', db.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})