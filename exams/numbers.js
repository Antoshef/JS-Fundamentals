function numbers(input) {
    let nums = input.split(' ');
    nums = nums.map(Number);
    let sum = 0;
    nums.forEach(element => {
        sum += element;
        return sum;
    });
    let average = sum / nums.length;
    nums.sort((a, b) => b - a);
    let sorted = [];
    nums.forEach(x => {
        if (x > average) {
            sorted.push(x);
        }
        return x;
    });
    sorted = sorted.splice(0,5);
    if (sorted.length == 0) {
        console.log('No');
    } else {
    console.log(sorted.join(' '));
    }
}
numbers('1')