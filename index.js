// Code your solution in this file

// function findMatching(collection, name) {
//   const sameName = [];
//
//   for (const nameEach of collection) {
//     if (nameEach.toUpperCase() === name.toUpperCase()) {
//       sameName.push(nameEach);
//     }
//   }
//   return sameName;
// }

function findMatching(collection, name) {
  return collection.filter(function(driver) {
    return driver.toUpperCase() === name.toUpperCase();
  });
}

function fuzzyMatch(collection, letters) {
  return collection.filter(function(nameEach) {
    return nameEach.slice(letters.length - ) === letters;
  });
}

function matchName(collection, name) {
  collection.filter(function(driver) {

  })
}
