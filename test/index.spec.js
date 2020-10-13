const crud = require("../src/index");
const assert = require("assert");
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
  const count1 = await controller.count()
  console.log('count1 returned', count1)
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
  const count2 = await controller.count()
  console.log('count2 returned', count2)
  assert.equal(xx.length, count2)  
  assert.equal(count1 + 1, count2)  
  const removed = await controller.remove(xx[0]._id)
  assert.strictEqual(null, removed)
  const count3 = await controller.count()
  console.log('count3 returned', count3)
  assert.equal(count1, count3)  
})()
