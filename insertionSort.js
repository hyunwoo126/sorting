function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    let curr = arr[j];
    // if current is less than prev,
    // then keep swapping back until it is no longer
    // less than prev
    while (j > 0 && curr < arr[j-1]) {
      // swap with prev
      [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
      
      j--;
      curr = arr[j];
    }
  }
  return arr;
}

/*
 * stable (keeps ordering of duplicates)
 * good for nearly sorted data
 * space complexity: O(1)
*/

console.log(insertionSort([5,4,3,2,1]));
console.log(insertionSort([1,10,0,3,7]));
// good for stuff like:
// single local max 
console.log(insertionSort([0,1,2,10,3,4]));
// single local min
console.log(insertionSort([1,2,0,3,4]));
