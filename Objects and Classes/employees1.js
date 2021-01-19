function employees(input) {

    class Person {
        constructor(name) {
            this.name = name,
            this.number = name.length
        }

        print() {
            return `Name: ${this.name} -- Personal Number: ${this.number}`
        }
    }

    let result = input.map(x => {
        return new Person(x).print();
    })
    .forEach(element => {
        console.log(element);
    });
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal',
    'Anton Stanev'
    ]
    )