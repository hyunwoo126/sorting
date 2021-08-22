/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    function choosePivot(left, right) {
        const pivot = Math.floor((left+right)/2);
        const pivotVal = nums[pivot];
        swap(pivot, right);
        return pivotVal;
    }
    
    function quickSort(leftBound, rightBound) {
        if (leftBound >= rightBound) return;
        
        const pivot = choosePivot(leftBound, rightBound);
        
        // keep track of right most index of which
        // everything to the left of it (and itself) is sorted as less than pivot
        let i = leftBound - 1;
        
        // loop and move less than pivot nums to the right of i,
        // and bump i
        for (let j = leftBound; j < rightBound; j++) {
            if (nums[j] < pivot) {
                i++;
                swap(i, j);
            }
        }
        
        // up to and including i is less than pivot
        // pivot should now go next to i
        swap(i+1, rightBound);
        
        quickSort(leftBound, i);
        quickSort(i+2, rightBound);
        
    }
    
    quickSort(0, nums.length-1);
    return nums;
};
