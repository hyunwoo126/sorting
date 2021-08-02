// sort ascending
function bubbleSort(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    // from second elem to ith element from the back
    for (let j = 0; j <= arr.length - 1 - i; j += 1) {
      // look forward 1 and compare
      if (arr[j] > arr[j+1]) {
        // swap
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
};

console.log(bubbleSort([5,4,3,2,1]));
console.log(bubbleSort([8, 1, 5, 0, 4]));
