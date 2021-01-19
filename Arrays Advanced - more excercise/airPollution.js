function airPollution(city,weather) {
    weather.forEach(element => {
        element = element.split(' ');
        if (element[0] == 'breeze') {
            let current = city.splice(element[1],1);
            current = current.toString();
            current = current.split(' ');
            current = current.map(x => x -= 15);
            current.forEach(element => {
                if (element < 0) {
                    current.splice(current.indexOf(element),1,0);
                }
            })
            current = current.join(' ');
            city.splice(element[1],0,current)
        } else if (element[0] == 'gale') {
            let index = 0;
            city.forEach(x => {
                x = x.split(' ');
                x[element[1]] -= 20;
                x.forEach(element => {
                    if (element < 0) {
                        x.splice(x.indexOf(element),1,0);
                    }
                })
                let current = x.join(' ');
                city.splice(index,1,current);
                index++;
            });
        } else if (element[0] == 'smog') {
            let index = 0;
            city.forEach(x => {
                x = x.split(' ');
                for (let i = 0; i < 5; i++) {
                    x[i] = Number(x[i]) + Number(element[1]);
                }
                let current = x.join(' ');
                city.splice(index,1,current);
                index++;
            });
        }
    });
    let polluted = [];
    let index = 0;
    let check = city.forEach(x => {
        x = x.split(' ');
        x.forEach(element => {
            if (element >= 50) {
                polluted.push(`[${index}-${x.indexOf(element)}]`);
            }
        });
        index++;
    });
    if (polluted.length > 0) {
        console.log(`Polluted areas: ${polluted.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }
}
airPollution(["5 7 3 28 32",
"41 12 49 30 33",
"3 16 20 42 12",
"2 20 10 39 14",
"7 34 4 27 24"],
[ "smog 11", "gale 3", "breeze 1", "smog 2"]

)