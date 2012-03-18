exports.map = function(doc) {
  emit(doc._id, 1)
}

exports.reduce = function(keys, vals, rereduce) {
  return null
}