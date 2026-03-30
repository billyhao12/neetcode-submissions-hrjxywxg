class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashMap = {};

        for (const num of nums) {
            if (hashMap[num]) {
                return true;
            } else {
                hashMap[num] = 1;
            }
        }

        return false;
    }
}
