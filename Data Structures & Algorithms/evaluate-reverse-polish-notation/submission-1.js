class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] !== '+' && tokens[i] !== '-' && tokens[i] !== '*' && tokens[i] !== '/') {
                stack.push(tokens[i]);
            } else if (tokens[i] === '+') {
                const secondNum = parseInt(stack.pop());
                const firstNum = parseInt(stack.pop());
                const sum = firstNum + secondNum;
                stack.push(sum);
            } else if (tokens[i] === '-') {
                const secondNum = parseInt(stack.pop());
                const firstNum = parseInt(stack.pop());
                const diff = firstNum - secondNum;
                stack.push(diff);
            } else if (tokens[i] === '*') {
                const secondNum = parseInt(stack.pop());
                const firstNum = parseInt(stack.pop());
                const product = firstNum * secondNum;
                stack.push(product);
            } else {
                const secondNum = parseInt(stack.pop());
                const firstNum = parseInt(stack.pop());
                const quotient = Math.trunc(firstNum / secondNum);
                stack.push(quotient);
            }
        }

        return stack.pop();
    }
}
