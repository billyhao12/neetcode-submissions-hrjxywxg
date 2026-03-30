class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const targetKey = target - nums[i];
            if (hashMap.has(targetKey)) {
                return [hashMap.get(targetKey), i];
            } else {
                hashMap.set(nums[i], i);
            }
        }
    }
}
