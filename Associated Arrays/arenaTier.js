function arenaTier(input) {
    let result = {};
    let i = 0;
            while (input[i] != 'Ave Cesar') {
                let line = input[i].split(' ');
                if (line[1] == 'vs') {
                    let gOne = line[0];
                    let gTwo = line[2];
                    if (result.hasOwnProperty(gOne) && result.hasOwnProperty(gTwo)) {
                        for (x in result[gOne]) {
                            if (result[gTwo].hasOwnProperty(x)) {
                                let twoFight = Object.values(result[gTwo]);
                                let twoSum = 0;
                                twoFight.forEach(x => {twoSum += x});
                                let oneFight = Object.values(result[gOne]);
                                let oneSum = 0;
                                oneFight.forEach(x => {oneSum += x});
                                if (twoSum > oneSum) {
                                    delete result[gOne];
                                    break;
                                } else if (twoSum < oneSum) {
                                    delete result[gTwo];
                                    break;
                                } 
                            }
                        }
                    }
                } else {
                    let name = line[0];
                    let tech = line[2];
                    let skill = Number(line[4]);
                    if (!result.hasOwnProperty(name)) {
                        result[name] = {};
                    }
                    let prevSkill = result[name][tech];
                    result[name][tech] = skill;
                    if (prevSkill > skill) {
                        result[name][tech] = prevSkill;
                    } 
                }
                i++;
            }
            let answer = '';
            let sum = 0;
            let sorted = Object.entries(result)
            .sort((a, b) => sorting(Object.values(a), Object.values(b)));
            for (let line of sorted) {
                sum = 0;
                Object.values(line[1])
                .forEach(element => {
                    sum += Number(element);    
                });
                answer += line[0] + ': ' + sum + ' skill\n';
                sum = 0;
                let tech = Object.entries(line[1])
                .sort((a, b) => secondSort(a, b));
                for (let more of tech) {
                    answer += '- ' + more[0] + ' <!> ' + more[1] + '\n';
                }
            }
            console.log(answer);

            function sorting(a, b) {
                let aSort = Object.values(a[1]);
                let aSum = 0;
                for (let line of aSort) {
                    aSum += Number(line);
                }
                let bSort = Object.values(b[1]);
                let bSum = 0;
                for (let line of bSort) {
                    bSum += Number(line);
                }
                return bSum - aSum;
            }
           function secondSort(a, b) {
               if (Number(b[1]) - Number(a[1]) == 0) {
                   let bWord = b[0];
                   let aWord = a[0];
                    return aWord.localeCompare(bWord);
               } else {
                   return Number(b[1]) - Number(a[1]);
               }
           }
}
arenaTier(
[
    'Pesho -> Duck -> 220',
    'Gosho -> Duck -> 120',
    'Gosho -> Suck -> 200',
    'Gosho vs Pesho',
    'Ave Cesar'

    ]
)
    