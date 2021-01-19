function pascalCase(input) {
    let result = [];
    let letter = input.split('');
    let check = 0;
    let word = '';
    for (let i = 0; i < letter.length; i++) {
        if (letter[i] == letter[i].toUpperCase()) {
            check++;
            if (check > 1) {
                result.push(word);
                check = 1;
                word = '';
            }
        }
        word += letter[i];
    }
    result.push(word);
    console.log(result.join(', '));
}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')