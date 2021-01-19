function replaceChars(input) {
    let letters = input.split('');
    let result = '';
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] !== letters[i+1]) {
            result += letters[i];
        }
    }
    console.log(result);
}
replaceChars('qqqwerqwecccwd')