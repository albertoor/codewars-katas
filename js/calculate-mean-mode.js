/*
Calculate the Mean and Mode
Create a statsFinder() function that takes in a list 
of numbers and returns a list containing the mean and 
mode, in that order. As a reminder, the mean is the 
average of the values and the mode is the most occurring 
value. If there are multiple modes, return the mode that 
occurs first. Make sure that you write your functions and 
find these answers from scratch – don’t use imported tools!

For example; 
    statsFinder([500, 400, 400, 375, 300, 350, 325, 300]) 
    should return [368.75, 400].

Variations of this challenge were reported to have been 
asked at interviews with Amazon. If you’ve covered the 
material in Pass the Technical Interview with JavaScript or 
an equivalent, you should be able to solve this challenge. 
If you have trouble, try refreshing your knowledge with its 
Algorithmic Complexity content.
*/
function statsFinder(array) {
  let mean = array.reduce((a, b) => a + b, 0) / array.length;

  let map = {};
  let maxCount = 1;
  let modes = [];

  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    if (map[element] == null) map[element] = 1;
    else map[element]++;

    if (map[element] > maxCount) {
      modes = [element];
      maxCount = map[element];
    } else if (map[element] == maxCount) {
      modes.push(element);
      maxCount = map[element];
    }
  }

  let result = [];
  let maxMode = Math.max(...modes);
  result.push(mean);
  result.push(maxMode);
  return result;
}

console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]));
