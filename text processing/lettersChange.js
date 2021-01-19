function lettersChange(input) {
    let words = input.split(' ');
    let result = 0;
    for (let word of words) {
        let sum = 0;
        if (word.length < 2) {
            continue;
        }
        let first = word[0];
        let last = word[word.length - 1];
        let num = Number(word.slice(1,word.length - 1));
        let index = first.toUpperCase()
        .charCodeAt(0);
        index -= 64;
        let lastIndex = last.toUpperCase()
        .charCodeAt(0);
        lastIndex -= 64;
        if (first == first.toUpperCase()) {
            num /= index;
        } else {
            num *= index; 
        }
        if (last == last.toUpperCase()) {
            num -= lastIndex;
        } else {
            num += lastIndex;
        }
        result += num;
    }
    console.log(result.toFixed(2));
}
lettersChange('a1A   h13t')