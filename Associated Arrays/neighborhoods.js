function neighborhoods(input) {
    let result = new Map();
    let neighbors = input.shift()
    .split(', ')
    .forEach(element => {
    result.set(element, []);    
    });;
    for (let line of input) {
        let [hood, person] = line.split(' - ');
        if (result.has(hood)) {
            result.get(hood).push(person);
        }
    }
    let sorted = Array.from(result);
    for (let i = 0; i < sorted.length; i++) {
        let count = sorted[i][1].length;
        sorted[i].push(count);
    }
    sorted.sort((a, b) => {
        return b[2] - a[2];
    })
    result = new Map();
    for (let i = 0; i < sorted.length; i++) {
        let name = sorted[i][0];
        let count = sorted[i][2];
        result.set(`${name}: ${count}`);
        console.log(`${name}: ${count}`);
        if (count > 0) {
            sorted[i][1].forEach(x => {
                result.set(x);
                console.log(`--${x}`);
            })
        }
    }
}
neighborhoods(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
)