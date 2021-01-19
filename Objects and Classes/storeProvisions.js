function storeProvisions(stock,order) {
    
    let shop = {};
    for (let i = 0; i < stock.length; i+=2) {
        const element = stock[i];
        shop[element] = Number(stock[i+1]);
    }

    for (let o = 0; o < order.length; o+=2) {
        let current = order[o];
        if (shop.hasOwnProperty(current)) {
            shop[current] += Number(order[o+1]);
        } else {
            shop[current] = Number(order[o+1]);
        }
        
    }
    Object.entries(shop).forEach(element => {
        console.log(`${element[0]} -> ${element[1]}`);
    });
}
storeProvisions([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )