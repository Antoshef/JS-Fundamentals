function legendaryFarming(input) {
    input = input.split(' ');
    let result = {
        'fragments': 0,
        'motes': 0,
        'shards': 0
    };
    for (let i = 0; i < input.length; i+=2) {
        let qty = Number(input[i]);
        let material = input[i+1].toLowerCase();
        if (!result.hasOwnProperty(material)) {
            result[material] = qty;
        } else {
            result[material] += qty;
        }
        if (material == 'fragments' && result[material] >= 250) {
            console.log('Valanyr obtained!');
            result[material] -= 250;
            break;
        } else if (material == 'shards' && result[material] >= 250) {
            console.log('Shadowmourne obtained!');
            result[material] -= 250;
            break;
        } else if (material == 'motes' && result[material] >= 250) {
            console.log('Dragonwrath obtained!');
            result[material] -= 250;
            break;
        }
    }
    let junk = [];
    let keyMaterials = Object.entries(result)
    .filter(x => {
        if (x[0] == 'fragments' || x[0] == 'motes' || x[0] == 'shards') {
            return x;
        } else {
            junk.push(x);
        }
    })
    .sort((a, b) => {
        if (b[1] > a[1] || b[1] < a[1]) {
            return b[1] - a[1];
        } else {
            return a[0].localeCompare(b[0]);
        }
    });
    junk.sort((a, b) => a[0].localeCompare(b[0]));
    let answer = '';
    for (let line of keyMaterials) {
        answer += line[0] + ': ' + line[1] + '\n';
    }
    for (let line of junk) {
        answer += line[0] + ': ' + line[1] + '\n';
    }
    console.log(answer);
}
legendaryFarming(
    '3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards'
)