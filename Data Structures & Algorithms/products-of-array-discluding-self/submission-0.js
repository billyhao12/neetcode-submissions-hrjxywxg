class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const result = new Array(n).fill(1);

        // Pass 1: prefix products
        let prefix = 1;
        for (let i = 0; i < n; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }

        // Pass 2: postfix products
        let postfix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] *= postfix;
            postfix *= nums[i];
        }

        return result;
    }
}
