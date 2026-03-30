class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const ops = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => Math.trunc(a / b)
        };

        for (const t of tokens) {
            if (t in ops) {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(ops[t](a, b));
            } else {
                stack.push(Number(t));
            }
        }

        return stack.pop();
    }
}
