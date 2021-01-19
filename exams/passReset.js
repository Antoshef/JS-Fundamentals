function passReset(input) {
    let password = input.shift();
    let i = 0;
    while (input[i] != 'Done') {
        let current = input[i].split(' ');
        if (current[0] == 'TakeOdd') {
            password = password.split('');
            let newPass = '';
            for (let o = 1; o < password.length; o+=2) {
                newPass += password[o];
            }
            password = newPass;
            console.log(password);
        } else if (current[0] == 'Cut') {
            let newPass = password.split('');
            let removed = newPass.splice(Number(current[1]),Number(current[2]));
            password = newPass.join('');
            console.log(password);
        } else if (current[0] == 'Substitute') {
            if (password.includes(current[1])) {
                while (password.includes(current[1])) {
                    password = password.replace(current[1],current[2]);
                }
                console.log(password);
            } else {
                console.log('Nothing to replace!');
            }
        }
        i++
    }
    console.log('Your password is: '+ password);
}
passReset([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'

    ])