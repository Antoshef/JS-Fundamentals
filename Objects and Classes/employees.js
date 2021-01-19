function employees(input) {
    let employee = {};
    for (worker of input) {
        employee[worker] = worker.length;
    }
    Object.entries(employee).forEach(element => {
        console.log(`Name: ${element[0]} -- Personal Number: ${element[1]}`);
    });

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )