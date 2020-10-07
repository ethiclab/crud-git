(function() {
  let f = async function(db, collectionName) {
    const collection = await db.collection(collectionName)
    const result = await collection.find({})
    return await result.toArray()
  }
  module.exports = f
})()
