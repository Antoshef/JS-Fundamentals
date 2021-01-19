function worldTour(input) {
    let result = input.shift();

    for (let line of input) {
        if (line == 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${result}`);
            break;
        }
        else if (line.includes('Add Stop')) {
            line = line.split(':');
            let index = Number(line[1]) - 1;
            let desitnation = line[2];
            // if (result.length >= index) {
                result = result.split('');
                result[index] += desitnation;
                result = result.join('');
            // }

        } else if (line.includes('Remove Stop')) {
            line = line.split(':');
            let start = Number(line[1]);
            let end = +line[2] + 1;
            if (start <= result.length && end <= result.length) {
                let sub = result.substring(start, end);
                result = result.replace(sub,'');
            }

        } else if (line.includes('Switch')) {
            line = line.split(':');
            let old = line[1];
            let newOne = line[2];
            if (result.includes(old)) {
                result = result.replace(old,newOne);
            }
        }
        console.log(result);
    }
}
worldTour([
    'Hawai::Cyprys-Cyprus',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'

])