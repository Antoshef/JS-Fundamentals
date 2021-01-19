function train(input) {
    let wagons = input
    .shift()
    .split(" ")
    .map((x) => Number(x));
    let capacity = input.shift();
    let addOn = '';
    let index = [];

    for (i = 0;i < input.length; i++) {
        if (input[i].length > 2) {
            addOn = input[i].split(' ');
            wagons.push(Number(addOn[1]));
            let removed = input.splice(i,1);
            i--;
        }
    }
    input.forEach(element => {
        let limit = capacity - element;
        // for (let i = 0; i < wagons.length; i++) {
        //     if (wagons[i] <= limit) {
        //         wagons[i] += Number(element);
        //         break;
        //     } 
        // }
        let result = wagons.filter(wagon => wagon <= limit);
        addOn = result[0];
        let index = wagons.indexOf(addOn);
        wagons[index] += Number(element);
    });
    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);
