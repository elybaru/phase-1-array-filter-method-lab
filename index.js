// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

function findMatching (drivers, string) {
    const matches = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
    return matches
}


// This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

const fuzzyMatch = (drivers, query) => {
    return drivers.filter(driver => driver.startsWith(query))
  }


// This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.
function matchName(drivers, string) {
    return drivers.filter(driver => {
        return driver.name === string
    })
    
}
