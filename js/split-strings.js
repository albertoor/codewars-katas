/*
    Complete the solution so that it splits the string into 
    pairs of two characters. If the string contains an odd number 
    of characters then it should replace the missing second 
    character of the final pair with an underscore ('_').

    Examples:
        solution('abc') // should return ['ab', 'c_']
        solution('abcdef') // should return ['ab', 'cd', 'ef']
*/
function solution(str) {
  let array = str.split('');
  let len = array.length;
  let newArr = [];
  if (len % 2 == 0) {
    for (let i = 0; i < len - 1; i += 2) {
      newArr.push(array[i] + array[i + 1]);
    }
    return newArr;
  } else {
    let lastEle = array.slice(-1).pop();

    for (let i = 0; i < len - 1; i++) {
      newArr.push(array[i] + array[i + 1]);
      i++;
    }
    newArr.push(lastEle + '_');
    return newArr;
  }
}
console.log(solution('abc'));
console.log(solution('abcdef'));
