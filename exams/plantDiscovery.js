function plantDiscovery(input) {

    let n = input.shift();
    let result = {};
    let actions = {
        Rate : (plant, rating) => {
            result[plant].Rating.push(+rating);
        },
        Update : (plant, rarity) => {
            result[plant].Rarity = +rarity;
        },
        Reset : (plant) => {
            result[plant].Rating = [];
        }
    };

    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let [plant, rarity] = line.split('<->');
        rarity = +rarity;
            result[plant] = {
                Rarity: +rarity, 
                Rating: []
            };
    };
    for (let i = 0; i < input.length; i++) {
        let line = input[i];
        if (line === 'Exhibition') {
            break;
        }
        let [command, arg] = line.split(': ');
        let [plant, count] = arg.split(' - ');
        let action = actions[command];
        count = +count;
        if (command === 'Reset') {
            count = 1;
        }
        if (!action || !result.hasOwnProperty(plant) || isNaN(count)) {
            console.log('error');
        } else {
            action(plant, count);
        }
    };
    
    for (let line in result) {
        if (result[line].Rating != 0) {
            let reduce = Array.from(result[line].Rating);
            let devider = reduce.length;
            reduce = reduce.reduce((a, b) => a + b);
            result[line].Rating = (reduce / devider);
        } else {
            result[line].Rating = 0;
        }
    }
    let sorted = Object.entries(result)
    .sort((a, b) => sorting(a, b));

    console.log('Plants for the exhibition:');
    for (let line of sorted) {
        let name = line[0];
        let rarity = line[1].Rarity;
        let rate = line[1].Rating;
        console.log(`- ${name}; Rarity: ${rarity}; Rating: ${rate.toFixed(2)}`);
    }

    function sorting(a, b) {
        let aRate = a[1].Rating;
        let bRate = b[1].Rating;
        let aRar = a[1].Rarity;
        let bRar = b[1].Rarity;
        return (bRar - aRar || bRate - aRate);
    }
}
plantDiscovery([
    '1',
    'Woodii<->20',
    // 'Welwitschia<->0',
    // 'Reset: Arnoldii',
    'Update: Woodii - -1',
    'Reset: Woodii',
    // 'Update: Welwitschia - 100',
    'Exhibition'
])