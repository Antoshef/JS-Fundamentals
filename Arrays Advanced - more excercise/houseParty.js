function houseParty(input) {
    let list = [];
    input.forEach(element => {
        let check = false;
        let current = element.split(' ');
        let name = current.shift();
        current = current.join(' ');
        if (current == 'is going!') {
            list.map(x => {
                if (name == x) {
                    console.log(`${name} is already in the list!`);
                    name = 0;
                } 
            })
            if (name != 0) {
                list.push(name);
            }
        } else {
            list.map(x => {
                if (name == x) {
                    let remove = list.splice(list.indexOf(name),1);
                    check = true;
                } 
            })
            if (check === false) {
                console.log(`${name} is not in the list!`);
            }
        }

    });
    list.forEach(x => {
        console.log(x);
    })
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']



)