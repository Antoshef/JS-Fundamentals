function sorting(input) {
    let biggest = input.sort((a, b) => (b - a));
    let result = [];
    for (let i = 0; i < input.length / 2; i++) {
        result.push(biggest[i]);
        result.push(biggest[biggest.length -1 - i]);
    }
    if (input.length % 2 == 1) {
        result.pop();
    }
    console.log(result.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 94])