function modernTimes(input) {
    let text = input.split(' ');
    for (let word of text) {
        if (word[0] == '#' && word.length > 1) {
            word = word.slice(1);
            let check = false;
            for (let i = 0; i < word.length; i++) {
                if (!isNaN(word[i])) {
                    check = true;
                }
            }
            if (!check) {
                console.log(word);
            }
        }
    }
}
modernTimes('Nowadays everyone uses # to tag a #sp4ecial word in #socialMedia')