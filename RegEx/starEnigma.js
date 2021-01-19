function starEnigma(input) {
    let n = Number(input.shift());
    let check = /@[A-Z][a-z]+[^@!:->]*:\d+[^@!:->]*![AD]![^@!:->]*->\d+/g;
    let planetX = /@[A-Z][a-z]+/g;
    let populationX = /:\d+/g;
    let fightX = /![AD]!/g;
    let soldiersX = /->\d+/g;
    let attacked = [];
    let destroyed = [];

    for (let i = 0; i < n;i++) {
        let line = input[i];
        let starCount = line.match(/[star]/gi);
        starCount = starCount.length;
        line = line.split('');
        let ascii = [];
        line.forEach(element => {
            let num = element.charCodeAt();
            num -= starCount;
            let str = String.fromCharCode(num);
            ascii.push(str);
        });
        line = ascii.join('');
        let doubleCheck = line.match(check);
        if (!doubleCheck) {
            continue;
        }
        let planet = line.match(planetX);
        if (!planet) {
            continue;
        }
        planet = planet[0].slice(1)
        let population = line.match(populationX);
        if (!population) {
            continue;
        }
        population = +population[0].slice(1);
        let sign = line.match(fightX);
        if (!sign) {
            continue;
        }
        let soldiers = line.match(soldiersX);
        if (!soldiers) {
            continue;
        }
        soldiers = +soldiers[0].slice(2);
        if (sign[0] == '!A!') {
            attacked.push(planet);
        } else {
            destroyed.push(planet);
        }
    }
    attacked.sort((a,b) => a.localeCompare(b));
    destroyed.sort((a,b) => a.localeCompare(b));

    let result = `Attacked planets: ${attacked.length}` + '\n';
    for (let name of attacked) {
        result += `-> ${name}` + '\n';
    }
    result += `Destroyed planets: ${destroyed.length}` + '\n';
    for (let name of destroyed) {
        result += `-> ${name}` + '\n';
    }
    console.log(result);
}
starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(888',
    'EHfsytsnhf?8555&I&2C9555SR'

])