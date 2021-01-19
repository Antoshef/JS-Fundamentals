function destinationMapper(input) {

    let pattern = /([=\/])(?<word>[A-Z][a-zA-Z]{2,})\1/gm;
    let destinations = input.match(pattern);
    let points = 0;
    let result = [];
    if (destinations) {
        for (let line of destinations) {
            let length = line.length - 2;
            points += length;
            let word = line.slice(1, -1);
            result.push(word);
        }

    }
        
    result = result.join(', ');
    console.log(`Destinations: ${result}`);
    console.log(`Travel Points: ${points}`);
}
destinationMapper(
    '=Hawai=/Cyprus=Invalid/invalid==i5valid=/I5valid/=i='
)