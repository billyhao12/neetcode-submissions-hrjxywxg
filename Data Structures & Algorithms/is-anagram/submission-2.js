class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const sArray = s.split('');
        const sHashMap = {};

        for (const letter of sArray) {
            if (sHashMap[letter]) {
                sHashMap[letter] = sHashMap[letter] += 1;
            } else {
                sHashMap[letter] = 1;
            }
        }

        const tArray = t.split('');
        const tHashMap = {};

        for (const letter of tArray) {
            if (tHashMap[letter]) {
                tHashMap[letter] = tHashMap[letter] += 1;
            } else {
                tHashMap[letter] = 1;
            }
        }

        for (const letter in sHashMap) {
            if (sHashMap[letter] !== tHashMap[letter]) {
                return false;
            }
        }

        return true;
    }
}
