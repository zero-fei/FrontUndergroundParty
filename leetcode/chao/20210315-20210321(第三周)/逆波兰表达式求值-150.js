/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []
    for(let i = 0; i < tokens.length; i++) {
        console.log(stack)
        if(Number.isInteger(Number(tokens[i]))) {
            stack.push(Number(tokens[i]))
            continue
        }
        const num1 = stack.pop();
        const num2 = stack.pop();
        switch(tokens[i]){
            case '+': 
                stack.push(num1 + num2)
                break
            case '-':
                stack.push(num1 - num2)
                break
            case '*':
                stack.push(num1 * num2)
                break
            case '/':
                stack.push(parseInt(num2 / num1))
                break
        }
    }
    return stack.pop()
};
console.log(evalRPN(["4","3","-"]))