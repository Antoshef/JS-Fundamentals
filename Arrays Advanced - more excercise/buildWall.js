function buildWall(input) {
    let feet = 0;
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let workingDays = 0;
        while (input[i] < 30) {
            feet++;
            workingDays++;
            input[i] += 1;
        }
        result.push(workingDays);
    }
    let answer = [];
    let cubics = 0;
    let index = 0;
    for (let o = 0; o < 50; o++) {
        cubics = 0;
        result.map(element => {
            index = result.indexOf(element);
            if (element > 0) {
                element -= 1;
                cubics += 195;
            }
            let num = element;
            result.splice(index,1,num);
        });
        answer.push(cubics);
    }
    let x = answer.indexOf(0);
    let removed = answer.splice(x);
    console.log(answer.join(', '));
    console.log(feet * 195 * 1900 + ' pesos');
}
buildWall([0, 22, 17, 19, 0])