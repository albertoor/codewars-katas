/*
    SORT the odd
    You will be given an array of numbers. You 
    have to sort the odd numbers in ascending 
    order while leaving the even numbers at their 
    original positions.

    Examples
        [7, 1]  =>  [1, 7]
        [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
        [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/
function sortArray(array) {
  if (array === []) return array;
  const extractOddNumbersSorted = array
    .filter((number) => !(number % 2) == 0)
    .sort((a, b) => a - b);

  for (i in array) {
    if (!(array[i] % 2) == 0) {
      array[i] = '_';
    }
  }
  //   filling array
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= extractOddNumbersSorted.length; j++) {
      if (array[i] === '_') {
        array[i] = extractOddNumbersSorted[j];
        extractOddNumbersSorted.shift();
      }
    }
  }
  return array;
}

// console.log(sortArray([5, 8, 6, 3, 4]));
// console.log(sortArray([5, 3, 2, 8, 1, 4]));
// console.log(sortArray([1, 11, 2, 8, 3, 4, 5]));
// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
// console.log(
//   sortArray([
//     28, -1, -17, -17, -29, -33, -37, -39, 34, -41, 40, -5, -5, -7, -2, 8, 39,
//     47, 18, 2, 48, 36, 0
//   ])
// );
// console.log(sortArray([5, 3, 1, 8, 0]));
