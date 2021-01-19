function heroesOfCode(input) {
    let actions = {
        CastSpell : (heroes, [name, mpCost, spell]) => {
            let hero = heroes[name];
            hero.mp -= Number(mpCost);
            if (hero.mp < 0) {
                console.log(`${name} does not have enough MP to cast ${spell}!`);
                hero.mp += Number(mpCost);
            } else {
                console.log(`${name} has successfully cast ${spell} and now has ${hero.mp} MP!`);
            }
        },
        TakeDamage : (heroes, [name, damage, source]) => {
            let hero = heroes[name];
            hero.hp -= Number(damage);
            if (hero.hp <= 0) {
                console.log(`${name} has been killed by ${source}!`);
                delete heroes[name];
            } else {
                console.log(`${name} was hit for ${damage} HP by ${source} and now has ${hero.hp} HP left!`);
            };
        },
        Recharge : (heroes, [name, mpAmt]) => {
            let hero = heroes[name];
            hero.mp += Number(mpAmt);
            if (hero.mp > 200) {
                mpAmt -= (hero.mp - 200); 
                hero.mp = 200;
            };
            console.log(`${name} recharged for ${mpAmt} MP!`);
        },
        Heal : (heroes, [name, hpAmt]) => {
            let hero = heroes[name];
            hero.hp += Number(hpAmt);
            if (hero.hp > 100) {
                hpAmt -= (hero.hp - 100); 
                hero.hp = 100;
            };
            console.log(`${name} healed for ${hpAmt} HP!`);
        }
    };
    // read number of heroes
    let n = Number(input.shift());

    let heroes = {};

    for (let i = 0; i < n; i++) {
        // parse each hero
        let [name, hp, mp] = input.shift().split(' ');
        heroes[name] = {
            name,
            hp: Number(hp),
            mp: Number(mp)
        }
    }
    // for each command until end
    while (input[0] != 'End' && Object.keys(heroes).length != 0) {
        // parse and execute command
        let [command, ...args] = input.shift().split(' - ');
        let action = actions[command]; 
        action(heroes, args);
    }

    // sort heroes
    let sorted = Object.entries(heroes)
    .sort(compareHeroes);

    function compareHeroes(a, b) {
        let heroA = a[1];
        let heroB = b[1];
        let result = heroB.hp - heroA.hp;
        if (result == 0) {
            result = a[0].localeCompare(b[0]);
        }
        return result;
    }
    // print result
    for (let line of sorted) {
        let result = '';
        result += line[0] + '\n';
        result += '  HP: ' + line[1].hp + '\n';
        result += '  MP: ' + line[1].mp;
        console.log(result);
    }
}
heroesOfCode(
    [
    '2',
    'Adela 40 200',
    'SirMullich 90 40',
    'Ivor 3 111',
    'Tyris 80 61',
    'Heal - Adela - 50',
    'Recharge - Adela - 100',
    'CastSpell - Adela - 140 - Fireball',
    'TakeDamage - SirMullich - 2 - Fireball',
    'TakeDamage - Adela - 2 - Mosquito',
    'End'
    ])