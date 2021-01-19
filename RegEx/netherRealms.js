function netherRealms(input) {
    let demons = {};
    let healthX = /[^\+\-\*\/\.\d]/g;
    let minusX = /\-\d+\.*\d*/g;
    let plusX = /[^\-]\d+\.*\d*/g;
    for (let line of input) {
        let name = line;
        demons[name] = {};
        let sum = 0;
        let health = line.match(healthX);
        health.forEach(element => {
            sum += element.charCodeAt();
        });
        demons[name]['hp'] = sum;
        let sumD = 0;
        let minus = line.match(minusX);
        let plus = line.match(plusX);
        console.log(sum);
    }

}
netherRealms([
    'M3ph-0.5s-0.5t0.0**','M3ph1st0**', 'Azazel'
])