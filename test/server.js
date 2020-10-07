const crud = require("../src/index");
const express = require('express')
const app = express()
const router = express.Router()

crud({
    url: 'https://github.com/ethiclab/samplegitdb.git',
    databaseName: 'sys',
    root: '/',
    router: router,
    col: 'menus'
})

app.use((req, res, next) => {
  router(req, res, next)
})

app.listen(12345)

console.log('visit http://localhost:12345/menus')
