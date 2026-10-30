class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = {};
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (hashMap[diff] !== undefined) {
                return [hashMap[diff], i];
            }
            hashMap[nums[i]] = i;
        }
    }
}