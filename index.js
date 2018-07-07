var recipes = { food: "test" }

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object)
  newObject[key] = value
  return newObject
}
