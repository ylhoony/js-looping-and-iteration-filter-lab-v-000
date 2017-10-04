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
  return collection.filter(function(nameEach) {
    return nameEach.toUpperCase() === name.toUpperCase();
  });
}

function fuzzyMatch(collection, letters) {
  collection.filter(function(nameEach) {
    return nameEach.search(letters);
  });
}
