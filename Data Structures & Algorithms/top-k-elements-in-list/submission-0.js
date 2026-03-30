class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const currentNum = nums[i];
            if (hashMap.has(currentNum)) {
                hashMap.set(currentNum, hashMap.get(currentNum) + 1);
            } else {
                hashMap.set(currentNum, 1);
            }
        }

        return [...hashMap.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(([key]) => key);
    }
}
