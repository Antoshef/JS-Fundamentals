function revealWords(words, text) {
    words = words.split(', ');
    for (let word of words) {
        length = word.length;
        let index = text.indexOf('*'.repeat(length));
        text = text.replace('*'.repeat(length), word);
    }
    console.log(text);
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'

)