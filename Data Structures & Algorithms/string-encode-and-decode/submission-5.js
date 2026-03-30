class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for (const s of strs) {
            res += s.length + '#' + s;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            const length = parseInt(str.substring(i, j));
            i = j + 1; // i becomes starting index of string
            j = i + length; // j becomes ending index of string plus one
            res.push(str.substring(i, j));
            i = j;
        }

        return res;
    }
}
