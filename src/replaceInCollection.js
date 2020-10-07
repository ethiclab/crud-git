(function() {
  let f = async function(db, collectionName, id, obj) {
    obj.update_date = new Date()
    let collection = await db.collection(collectionName)
    let old = await collection.findOne({ _id: id })
    if (!old) {
      obj._id = id
      let result = await collection.insertOne(obj, {w:1})
    } else {
      delete obj._id
      let result = await collection.replaceOne(old, obj, { upsert: false })
    }
    let newObj = await collection.findOne({_id: id})
    newObj.create_date = newObj._id.getTimestamp()
    return newObj
  }
  module.exports = f
})()
