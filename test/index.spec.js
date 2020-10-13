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

  const countAtBeginning = await controller.count()

  const firstCreatedObject = await controller.create({
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

  const allCollectionObjects = await controller.read()

  const countAllCollectionObjects = await controller.count()

  assert.equal(allCollectionObjects.length, countAllCollectionObjects, "Counting collection objects and read collection objects do not return the same number of items.")

  assert.equal(countAtBeginning + 1, countAllCollectionObjects, "Number of objects did not increment by 1 as expected.")  

  const removed = await controller.remove(allCollectionObjects[0]._id)

  assert.strictEqual(null, removed, "Remove method should return null")

  const countAtEnd = await controller.count()

  assert.equal(countAtBeginning, countAtEnd)  
})()
