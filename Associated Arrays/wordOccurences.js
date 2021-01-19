function wordOccurences(input) {
    let words = new Map();
    for (let i = 0; i < input.length; i++) {
        let count = 0;
        let current = input[i];
        if (!words.has(current)) {
            for (let o = 0; o < input.length; o++) {
                if (current == input[o]) {
                    count++;
                };
            }
        words.set(current,count);
        }
    }
    let sequence = Array.from(words);
    sequence.sort((a, b) => {
        return b[1] - a[1];
    });
    let library = new Map(sequence);
    for (let [name, qty] of library) {
        console.log(`${name} -> ${qty} times`);
    };
}
wordOccurences(["Here", "is", "the", "first", "sentence", "Here",
 "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])