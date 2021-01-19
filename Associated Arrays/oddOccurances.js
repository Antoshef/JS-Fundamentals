function oddOccurances(input) {
    input = input.split(' ');
    let check = [];
    input.map(element => {
        check.push(element.toLowerCase());
    });
    let result = new Map();
    let count = 0;
    for (let word of check) {
        if (result.has(word)) {
            result.set(word, count++);
        }
        result.set(word);
    }
}
oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')