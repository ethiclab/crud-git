(function() {
  let f = async function(db, collectionName, id) {
    let collection = await db.collection(collectionName)
    let obj = await collection.findOne({ _id: id})
    return obj
  }
  module.exports = f
})()
