function bunnyKill(input) {
    let bombs = input.pop();
    bombs = bombs.split(' ');
    let dmg = 0;
    let kills = 0;
    let kill = [];
    for (let i = 0; i < bombs.length; i++) {
        let bomb = bombs[i].split(',');
        kill = input.splice(bomb[0],1);
        kill = kill.toString();
        kill = kill.split(' ');
        let removed = kill.splice(bomb[1],1,'0');
        kill = kill.join(' ');
        input.splice(bomb[0],0,kill);
        if (removed > 0) {
            kills++;
        }
        dmg += Number(removed);
        let length = input.length;

        for (let o = 0; o < length; o++) {
            if (o == Number(bomb[0]) - 1 || o == Number(bomb[0]) || o == Number(bomb[0]) + 1) {
                line = input.splice(o,1);
                line = line.toString();
                line = line.split(' ');
                line[Number(bomb[1]) - 1] -= removed;
                line[Number(bomb[1])] -= removed;
                line[Number(bomb[1]) + 1] -= removed;
                line.map(element => {
                    Number.isNaN(element);

                    if (element < 0) {
                        line.splice(line.indexOf(element),1,0);
                    }
                })
                line = line.join(' ');
                input.splice(o,0,line);
            }
        }
    }
    input.forEach(element => {
        let check = element.split(' ');
        check.map(element => {
            if (Number(element) > 0) {
                kills++;
                dmg += Number(element);
            }
        })
    });
    console.log(dmg);
    console.log(kills);
}
bunnyKill(['10 10 10',
'10 10 10', 
'10 10 10',
'1,1 1,0']
)