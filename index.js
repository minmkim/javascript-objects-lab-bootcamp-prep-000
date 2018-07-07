var recipes = { food: "test" }

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = object.assign({}, object)
  newObject.key = value
  return newObject
}
