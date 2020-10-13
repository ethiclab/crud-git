(function() {
  let f = async function(db, collectionName, id) {
    let collection = await db.collection(collectionName)
    if (id) {
      await collection.deleteOne(id)
    } else {
      await collection.drop()
    }
    return null
  }
  module.exports = f
})()
