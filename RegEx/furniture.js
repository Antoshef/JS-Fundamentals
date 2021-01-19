function furniture(input) {
    let pattern = />>\w+<<\d+\.*\d*!\d+/;
    let i = 0;
    let result = 'Bought furniture:' +'\n';
    let sum = 0;
    while (input[i] != 'Purchase') {
        let check = pattern.exec(input[i]);
        if (check) {
            let name = /\w+/;
            let realName = name.exec(input[i]);
            result += realName[0] + '\n';
            let price = /\d+\.*\d*/;
            let realPrice = +price.exec(input[i]);
            let qty = /\!\d+/;
            let realQty = qty.exec(input[i]);
            realQty = +realQty[0].slice(1);
            sum += (realPrice * realQty);
        }
        i++;
    }
    result += `Total money spend: ${sum.toFixed(2)}`;
    console.log(result);
}
furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
])