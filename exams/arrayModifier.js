function arrayModifier(input) {
    let array = input.shift();
    array = array.split(' ');
    array = array.map(x => {
        x = Number(x);
        return x;
    });
    for (let line of input) {
        line = line.split(' ');
        let command = line.shift();
        if (command == 'swap') {
            let first = array.splice(line[0],1,array[line[1]]);
            let second = array.splice(line[1],1,first[0]);
        } else if (command == 'multiply') {
            let multiplicator = array[line[1]];
            let digit = array.splice(line[0],1);
            digit = digit * multiplicator;
            array.splice(line[0],0,digit);
        } else if (command == 'decrease') {
            array = array.map(element => {
                element = element - 1;
                return element;
            });
        } else {
            break;
        }
    }
    console.log(array.join(', '));
}
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  
  )