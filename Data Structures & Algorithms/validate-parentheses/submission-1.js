class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const match = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        for (const c of s) {
            if (c === '(' || c === '{' || c === '[') {
                stack.push(c);
            } else {
                if (stack.pop() !== match[c]) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
