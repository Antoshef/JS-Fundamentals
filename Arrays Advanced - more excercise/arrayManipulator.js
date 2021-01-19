function arrayManipulator(sequence,input) {
        input.forEach(element => {
        let split = element.split(' ');
        let action = split.shift();
        if (action == 'add') {
            sequence.splice(split[0],0,Number(split[1]));
        } else if (action == 'addMany') {
            let index = split.shift();
            split.reverse();
            split = split.map(Number);
            split.forEach(element => {
                sequence.splice(index,0,element);
            })
        } else if (action == 'contains') {
            console.log(sequence.indexOf(Number(split)));
        } else if (action =='remove') {
            let removed = sequence.splice(split,1);
        } else if (action == 'shift') {
            for (let i = 0; i < split; i++) {
                let shifted = sequence.shift();
                sequence.push(shifted);
            }
        } else if (action == 'sumPairs') {
            let newSequence = sequence;
            let index = sequence.length / 2;
            sequence = [];
            for (let i = 0; i < index ;i++) {
                let sum = 0;
                let digit1 = newSequence.shift();
                let digit2 = newSequence.shift();
                if (digit2 == undefined) {
                    digit2 = 0;
                }
                sum += Number(digit1) + Number(digit2);
                sequence.push(sum);
            }
        } else if (action == 'print') {
            console.log("[ " + sequence.join(", ") + " ]");
        }
    });
}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    )