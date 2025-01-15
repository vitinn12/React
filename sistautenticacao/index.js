const express = require('express')
const app = express()

const db = require('./config/db.js')
const consign = require('consign')

consign()
   //.include('./config/passport.js')

   .then('./config/middlewares.js')
   .then('./api')
   .then('./config/routes.js')
   .into(app)


app.db = db

app.listen(3000, () => {
    console.log('Servidor executando ...')
  })



const listUsuarios = (req, res) => {
   app.db('usuarios')
       .orderBy('nome')
       .then(users => res.json(users))
       .catch(err => res.status(400).json(err))
       return {save, listUsuarios}
}

