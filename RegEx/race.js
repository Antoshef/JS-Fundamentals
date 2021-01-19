function race(input) {
    let names = input.shift();
    names = names.split(', ');
    let racers = {};
    for (let name of names) {
        racers[name] = 0;
    }
    let namePat = /[A-Za-z]/g;
    let kmPat = /\d+/g;
    let i = 0;
    while (input[i] != 'end of race') {
        let line = input[i];
        let name = line.match(namePat).join('');
        let distance = line.match(kmPat).join('').split('');
        let sum = 0;
        distance.forEach(element => {
            sum += Number(element);
        });
        if (Object.keys(racers).includes(name)) {
            racers[name] += sum;
        }
        i++;
    }
    let sorted = Object.entries(racers)
    .sort((a,b) => {
        return b[1] - a[1];
    });
    for (let i = 1; i <= 3; i++) {
        if (i == 1) {
            console.log('1st place: ' + sorted[i-1][0]);
        } else if (i == 2) {
            console.log('2nd place: ' + sorted[i-1][0]);
        } else {
            console.log('3rd place: ' + sorted[i-1][0]);
        }
    }
}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])