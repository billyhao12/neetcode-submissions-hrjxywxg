class Solution {
    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let originalClean = '';
        let reversed = '';
        for (let i = 0; i < s.length; i++) {
            if (this.isAlphanumeric(s[i])) originalClean += s[i].toLowerCase();
        }

        for (let i = originalClean.length - 1; i >= 0; i--) {
            reversed += originalClean[i];
        }

        return originalClean === reversed;
    }
}
