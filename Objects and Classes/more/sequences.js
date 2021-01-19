function sequences(input) {
    let result = [];
    let e = 0;
    for (let line of input) {
        line = JSON.parse(line);
        let sorted = line.sort((a, b) => {
            return b - a;
        });
        let same = false;
        for (let i = 0; i < result.length; i++) {
            var count = 0;
            for (let o = 0; o < sorted.length; o++) {
                if (result[i][o] == sorted[o]) {
                    count++;
                }
            }
            if (count == sorted.length) {
                same = true;
                break;
            }
        }
        if (e < 1 || !same) {
            result.push(sorted);
        }
        e++;
    }
    result = result.sort((a, b) => a.length - b.length);
    for (let line of result) {
        console.log('[' + line.join(', ') + ']');
    }
}
sequences(
    ["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]	
    

)