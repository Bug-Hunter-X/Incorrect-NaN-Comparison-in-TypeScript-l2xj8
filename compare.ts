function compare(a, b) {
  if (a < b) {
    return -1; // Correct
  } else if (a > b) {
    return 1; // Correct
  } else {
    return 0; // Correct
  }
}

function correctBuggyCompare(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return 0; // Handle NaN correctly
  } else if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

console.log(compare(1, 2)); // Output: -1
console.log(compare(2, 1)); // Output: 1
console.log(compare(1, 1)); // Output: 0

console.log(correctBuggyCompare(1, 2)); // Output: -1
console.log(correctBuggyCompare(2, 1)); // Output: 1
console.log(correctBuggyCompare(NaN, NaN)); // Output: 0 (Corrected!)