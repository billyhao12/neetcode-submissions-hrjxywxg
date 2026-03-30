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

        const bucketArr = new Array(nums.length + 1).fill(null).map(() => []);

        hashMap.forEach((value, key) => {
            bucketArr[value].push(key);
        });

        const response = [];
        // Return the k most frequent elements
        for (let i = bucketArr.length - 1; i > 0; i--) {
            for (const n of bucketArr[i]) {
                response.push(n);
                if (response.length === k) {
                    return response;
                }
            }
        }
    }
}
