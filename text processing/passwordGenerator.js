function passwordGenerator(input) {
    let text = (input[0] + input[1])
    .split('');
    let word = input[2]
    .split('');
    let index = 0;
    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        if (index == word.length) {
            index = 0;
        }
        if (letter == 'i' || letter == 'e' || letter == 'o' || letter == 'u' || letter == 'a') {
            text[i] = word[index].toUpperCase();
            index++
        }
    }
    text = text.reverse().join('');
    console.log('Your generated password is ' + text);
}
passwordGenerator([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
    ]
    
    )