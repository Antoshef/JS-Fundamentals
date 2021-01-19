function makeDictionary(input) {
    let dictionary = {};
    for (let line of input) {
        let current = JSON.parse(line);
        dictionary = Object.assign(dictionary,current);
    }
    let sorted = Object.keys(dictionary);
    sorted = sorted.sort((a, b) => a.localeCompare(b));
    for (let term of sorted) {
        let definition = dictionary[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}
makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )