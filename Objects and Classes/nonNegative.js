function average(input) {
    let max = Number.NEGATIVE_INFINITY;
    let min = Number.POSITIVE_INFINITY;
    for (let i = 0; i < input.length; i++) {
        if (input[i] > max) {
            max = input[i];
        }
        if (input[i] < min) {
            min = input[i];
        }
    }
    let removed = input.splice(input.indexOf(max),1);
    removed = input.splice(input.indexOf(min),1);
    let length = input.length;
    let sum = 0;
    input.forEach(x => sum += x);
    console.log(Math.round(sum / length));
}
average([6,4,8,12,3])