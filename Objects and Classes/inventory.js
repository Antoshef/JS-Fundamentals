function inventory(input) {
    let heroes = [];
    class Heroes {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }
    for (let line of input) {
        let current = line.split(' / ');
        let name = current.shift();
        let level = current.shift();
        level = Number(level);
        let items = current.shift();
        items = items.split(', ')
        .sort()
        .join(', ');
        let hero = new Heroes(name, level, items);
        heroes.push(hero);
    }
    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(x => {
        console.log(`Hero: ${x.name}`);
        console.log(`level => ${x.level}`);
        console.log(`items => ${x.items}`);
    })
}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    )