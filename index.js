// Code your solution in this file
 
function findMatching(collection, name) {
  const sameName = [];

  for (const nameEach of collection) {
    if (nameEach === name) {
      sameName.push(nameEach);
    }
  }
  return sameName;
}