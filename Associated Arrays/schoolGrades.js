function solve(input) {
    let grades = new Map();
    for (let line of input) {
        line = line.split(' ');
        let name = line.shift();
        line = line.map(Number);
        if (grades.has(name)) {
            let nums = grades.get(name);
            nums = nums.concat(line);
            grades.set(name,nums);
        } else {
            grades.set(name,line);
        }
    }
    let sorted = Array.from(grades)
    .sort((a, b) => average(a, b));
    function average(a, b) {
        let aSum = 0;
        for (let i = 0; i < a[1].length; i++) {
            aSum += a[1][i];
        }
        let bSum = 0;
        for (let o = 0; o < b[1].length; o++) {
            bSum += b[1][o];
        }
        let aAverage = aSum / a[1].length;
        let bAverage = bSum / b[1].length;
        return aAverage - bAverage;
    }
    
    sorted.forEach(x => {
        console.log(`${x[0]}: ${x[1].join(', ')}`);
    });
}
solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)