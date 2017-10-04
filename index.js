// Code your solution in this file
 
function findMatching(collection, name) {
  const sameName = [];

  for (const nameEach of collection) {
    if (nameEach.toUpperCase() === name.toUpperCase()) {
      sameName.push(nameEach);
    }
  }
  return sameName;
}