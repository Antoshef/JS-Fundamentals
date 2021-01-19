function gladiatorInventory(input) {
    let inventory = input.shift();
    inventory = inventory.split(' ');
    for (x of input) {
        x = x.split(' ');
        let action = x.shift();
        let item = x.shift();
        if (action == 'Buy') {
            let check = inventory.map(y => y == item);
            let add = 0;
            check.forEach(element => {
                if (element == true) {
                    add = 1;
                }
            });
            if (add == 0) {
                inventory.push(item);
            }
        } else if (action == 'Trash') {
            let check = inventory.map(y => y == item);
            let trash = 0;
            check.forEach(element => {
                if (element == true) {
                    trash = 1;
                }
            });
            if (trash == 1) {
                let index = inventory.indexOf(item);
                inventory.splice(index,1);
            }
        } else if (action == 'Repair') {
            let check = inventory.map(y => y == item);
            let repair = 0;
            check.forEach(element => {
                if (element == true) {
                    repair = 1;
                }
            });
            if (repair == 1) {
                let index = inventory.indexOf(item);
                let repaired = inventory.splice(index,1);
                inventory.push(item);
            }
        } else if (action == 'Upgrade') {
            item = item.split('-');
            let itemCheck = item.shift();
            let check = inventory.map(y => y == itemCheck);
            let upgraid = 0;
            check.forEach(element => {
                if (element == true) {
                    upgraid = 1;
                }
            });
            if (upgraid == 1) {
                let index = inventory.indexOf(itemCheck);
                itemCheck = `${itemCheck}:${item}`;
                inventory.splice(index + 1,0,itemCheck);
            }
        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']

)