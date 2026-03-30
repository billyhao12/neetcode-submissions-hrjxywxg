class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = {};

        for (let i = 0; i < nums.length; i++) {
            hashMap[nums[i]] = i;
        }

        for (let i = 0; i < nums.length; i++) {
            const targetKey = target - nums[i];
            const targetKeyIndex = hashMap[targetKey];
            if (targetKeyIndex !== undefined && targetKeyIndex !== i) {
                return [i, targetKeyIndex];
            }
        }
    }
}
