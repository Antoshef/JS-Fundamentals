function bombNumbers(sequence,bomb) {
    let removed = sequence.map(x => x == bomb[0]);
    let index = removed.indexOf(true);
    while (index != -1) {
        let deleted = [];
        if ((index - bomb[1]) < 0) {
            deleted = sequence.splice(0,(bomb[1] * 2) + 1 + (index - bomb[1]));
            removed.splice(0,(bomb[1] * 2) + 1 + (index - bomb[1]));
            index = removed.indexOf(true);
        } else {
            deleted = sequence.splice((index - bomb[1]),(bomb[1] * 2) + 1);
            removed.splice((index - bomb[1]),(bomb[1] * 2) + 1);
            index = removed.indexOf(true);
        }
    }
    let sum = 0;
    sequence.forEach(element => {
        sum += element;
    });
    console.log(sum);
}
bombNumbers([ 1, 2, 1,1,3,1,1,2],
    [2, 2]
    );