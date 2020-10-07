(function() {
  let f = async function(db, collectionName, id) {
    let collection = await db.collection(collectionName)
    if (id) {
      await collection.deleteOne({ _id: id })
    } else {
      await collection.drop()
    }
    return null
  }
  module.exports = f
})()
