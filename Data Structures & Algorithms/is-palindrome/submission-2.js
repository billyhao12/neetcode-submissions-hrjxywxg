class Solution {
    isAlphaNumeric(char) {
        if (char >= 'a' && char <= 'z'
            || char >= 'A' && char <= 'Z'
            || char >= '0' && char <= '9') {
                return true;
            } else {
                return false;
            }
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while (l < r && !this.isAlphaNumeric(s[l])) {
                l++;
            }

            while (r > l && !this.isAlphaNumeric(s[r])) {
                r--;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }
}
