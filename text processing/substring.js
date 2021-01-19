function substring(word, text) {
    word = word.toLowerCase();
    text = text.toLocaleLowerCase()
    .split(' ')
    .filter(x => x === word);
    if (text.length > 0) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
substring('&sa',
'JavaScript is the &sa programming language'
)