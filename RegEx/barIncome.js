function barIncome(input) {
    let nameX = /%[A-Z][a-z]+%/g;
    let productX = /<\w+>/g;
    let countX = /\|\d+\|/g;
    let priceX = /\d+\.*\d*\$/g;
    let total = 0;
    let line = input.shift();
    while (line!== 'end of shift') {
        let name = line.match(nameX);
        if (name) {name = name[0].match(/[A-Z][a-z]+/);}
        let product = line.match(productX);
        if (product) {product = product[0].match(/\w+/);}
        let count = line.match(countX);
        if (count) {count = Number(count[0].match(/\d+/));}
        let price = line.match(priceX);
        if (price) {price = Number(price[0].match(/\d+.*\d/));}
        let sum = count * price;
        if (name && product && count && price) {
            console.log(`${name[0]}: ${product[0]} - ${sum.toFixed(2)}`);
            total += sum;
        }
        line = input.shift();
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}
barIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
])