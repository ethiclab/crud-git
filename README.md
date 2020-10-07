# crud-git

    npm install @ethiclab/crud-git

# status

Development in progress.

# usage

A simple example, with no actual express router, only for testing purposes.

```javascript
const crud = require("@ethiclab/crud-git");
(async () => {
  const controller = await crud({
    url: 'https://github.com/ethiclab/samplegitdb.git',
    databaseName: 'sys',
    root: '/',
    router: {
      get: () => {
        return {}
      },
      post: () => {
        return {}
      },
      put: () => {
        return {}
      },
      delete: () => {
        return {}
      }
    },
    col: 'mycollection'
  })
  const x = await controller.create({
    name: 'test object'
  })
  console.log(x)
})()
```

The property databaseName refers to a folder in the repository.

Behaviour depends on the kind of the filesystem file 'mycollection'

1. If it is a folder, then items are also folders named with a key (TODO: how to generate the key?)
2. In case of a text file, the items are the single rows of that file.

An example using express router.

```javascript
const crud = require("@ethiclab/crud-git");
const express = require('express')
const app = express()
const router = express.Router()

crud({
    url: 'https://github.com/ethiclab/samplegitdb.git',
    databaseName: 'sys',
    root: '/',
    router: router,
    col: 'mycollection'
})

app.use((req, res, next) => {
  router(req, res, next)
})

app.listen(12345)
```

Then, you can visit:

http://localhost:12345/mycollection

You can also use, for instance, Postman, for creating, updating and deleting records.

The following endpoints are defined:

    GET /mycollection
    POST /mycollection
    GET /mycollection/:id
    PUT /mycollection/:id
    DELETE /mycollection/:id

# where are the schemas?

This is a low level library for storing arbitrary documents with arbitrary properties
in order to support new properties, therefore, we decided not to add schema support
at this level.

# test

    GITHUB_TOKEN=<your token> npm test

# test server

    node test/server.js
