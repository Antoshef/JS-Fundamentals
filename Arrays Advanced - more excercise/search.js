function search(sequence,output) {
    let collection = sequence
    .splice(0,output[0])
    .splice(output[1]);
    let check = collection.map(x => x == output[2]);
    let count = 0;
    check.forEach(element => {
        if (element == true) {
            count++;
        }
    });
    console.log(`Number ${output[2]} occurs ${count} times.`);
}
search([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    
    );