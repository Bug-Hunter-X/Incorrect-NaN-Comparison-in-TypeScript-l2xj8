function compare(a, b) {
  if (a < b) {
    return -1; // Correct
  } else if (a > b) {
    return 1; // Correct
  } else {
    return 0; // Correct
  }
}

function buggyCompare(a, b) {
  return a === b ? 0 : a < b ? -1 : 1; // Buggy
}

console.log(compare(1, 2)); // Output: -1
console.log(compare(2, 1)); // Output: 1
console.log(compare(1, 1)); // Output: 0

console.log(buggyCompare(1, 2)); // Output: -1
console.log(buggyCompare(2, 1)); // Output: 1
console.log(buggyCompare(NaN, NaN)); // Output: 1 (Bug! Should be 0)