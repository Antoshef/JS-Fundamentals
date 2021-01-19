function wordsTracker(input) {
    let seek = input.shift()
    .split(' ');
    let words = new Map();
    for (let word of seek) {
        let count = 0;
        for (let line of input) {
            if (line == word) {
                count++;
            }
        }
        words.set(word, count);
    }
    let result = [...words];
    result.sort((a, b) => {
        return b[1] - a[1];
    })
    words = new Map(result);
    for (let [name, qty] of words) {
        console.log(`${name} - ${qty}`);
    }
}
wordsTracker(['this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'])