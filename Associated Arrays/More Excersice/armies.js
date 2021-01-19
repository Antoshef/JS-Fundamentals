function armies(input) {
    let result = {};
    for (let line of input) {
        if (line.includes('arrives')) {
            line = line.split(' ');
            let command = line.pop();
            let name = line.join(' ');
            result[name] = [];
        } else if (line.includes(':')) {
            line = line.split(': ');
            let name = line.shift();
            if (result.hasOwnProperty(name)) {
                let [army, count] = line[0].split(', ');
                count = +count;
                result[name].push(army,count);
            } 
        } else if (line.includes('+')) {
            let [army, count] = line.split(' + ');
            count = +count;
            for (let name in result) {
                let check = Array.from(result[name]);
                for (let i = 0; i < check.length; i+=2) {
                    if (check[i] == army) {
                        check[i+=1] += count;
                        result[name] = check;
                        break;
                    }
                }
            }

        } else if (line.includes('defeated')) {
            line = line.split(' ');
            let command = line.pop();
            let name = line.join(' ');
            delete result[name];
        }
    }
    let sorted = Object.entries(result)
    .sort((a, b) => {
        let aCount = 0;
        a[1].forEach(x => {
            if (!isNaN(x)) {
                aCount += x;
            }
        });
        let bCount = 0;
        b[1].forEach(x => {
            if (!isNaN(x)) {
                bCount += x;
            }
        });
        return bCount - aCount;
    });
    for (let line of sorted) {
        let count = 0;
        line[1].forEach(x => {
            if (!isNaN(x)) {
                count += x;
            }
        });
        console.log(line[0] + ': ' + count);
        let ordered = Array.from(line[1]);
        let ord = [];
        for (let i = 0; i < ordered.length; i+=2) {
            ord.push(ordered[i] + ': ' + ordered[i+1]);
        }
        ord.sort((a, b) => {
            let [aName,aCount] = a.split(': ');
            let [bName,bCount] = b.split(': ');
            return Number(bCount) - Number(aCount);
        })
        for (let line of ord) {
            let [name, count] = line.split(': ');
            console.log(`>>> ${name} - ${count}`);
        }
    }
}
armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000',
 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350',
  'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302',
   'Rick Burr defeated', 'Porter: Retix, 3205'])