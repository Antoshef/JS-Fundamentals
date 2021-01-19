function equalNeibours(input) {
    let count = 0;
    let last = [];
    let current = [];
    input.forEach(element => {
        current = element;
        for (let i = 0; i < current.length; i++) {
            if (current[i] === last[i]) {
                count++;
            }
            if (current[i] === current[i - 1]) {
                count++;
            }
        }
        last = current;
    });
    console.log(count);
}
equalNeibours([ ['2', '2', '5', '7', '4'],
                ['4', '0', '5', '3', '4'],
                ['2', '5', '5', '4', '2']]
);