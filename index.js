// Write your solution in this file!
const driver = {}; 

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const driver_two = Object.assign({}, driver, { [key]: value })
  delete driver_two[key]
  return driver
}
