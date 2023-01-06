let nums = [1, 1, 2, 3, 4, 5, 5, 5];
/**
 * 
 * @param {array} nums 
 * @returns 
 */
let removeDup = function (nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
    }
    return ++i;
};
console.log(removeDup(nums));
