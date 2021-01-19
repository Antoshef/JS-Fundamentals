function janNotation(input) {
    let num = [];
    let oper = '';
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        if (current >= Number.MIN_SAFE_INTEGER) {
            num.push(current);
        } else {
            oper = current;
            if (oper == '+') {
                result = num[num.length - 2] + num.pop();
                let removed = num.pop();
                num.push(result);
            } else if (oper == '-') {
                result = num[num.length - 2] - num.pop();
                let removed = num.pop();
                num.push(result);
            } else if (oper == '*') {
                result = num.pop() * num.pop();
                num.push(result);
            } else {
                result = num[num.length - 2] / num.pop();
                let removed = num.pop();
                num.push(result);
            }
        }
    }
    if (isNaN(result) === true) {
        console.log('Error: not enough operands!');
    }
    else if (num.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(result);
    }
}

janNotation([15,
    '/']
   )