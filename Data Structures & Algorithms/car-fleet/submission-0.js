class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const positionSpeedPaired = [];
        for (let i = 0; i < position.length; i++) {
            positionSpeedPaired.push([position[i], speed[i]]);
        }

        positionSpeedPaired.sort((a, b) => b[0] - a[0]);

        const stack = [];
        for (const [p, s] of positionSpeedPaired) {
            const timeToTarget = (target - p) / s;
            stack.push(timeToTarget);
            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop();
            }
        }

        return stack.length;
    }
}
