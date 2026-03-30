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
            hashMap.set(currentNum, hashMap.get(currentNum) ? hashMap.get(currentNum) + 1 : 1)
        }

        // Bucket sort where the index indicates the frequency
        const bucketArr = Array.from({ length: nums.length + 1 }, () => []);

        hashMap.forEach((val, key) => {
            bucketArr[val].push(key);
        });

        const result = [];
        for (let i = bucketArr.length - 1; i >= 1; i--) {
            for (const num of bucketArr[i]) {
                result.push(num);
                if (result.length === k) {
                    return result;
                }
            }
        } 
    }
}
