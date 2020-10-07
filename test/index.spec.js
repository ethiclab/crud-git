const crud = require("../src/index");
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
    col: 'menus'
  })
  const x = await controller.create({
    name: 'string',
    number: 1,
    boolean: true,
    'spaced string': 'ok',
    'á': 'ñ',
    object: {
      a: 123
    },
    array: [
      'hello', 'world'
    ]
  })
  console.log('insert returned', x)
  const xx = await controller.read()
  console.log('read returned', xx)
})()
