function schoolRegister(input) {
    let result = {};
    let pattern = /[A-Za-z ]+: (?<student>[A-Za-z]+), [A-Za-z ]+: (?<grade>\d+), [A-Za-z ]+: (?<average>\d\.\d+)/;
    for (let line of input) {
        let match = pattern.exec(line);
        let name = match.groups.student;
        let grade = +match.groups.grade + 1;
        let average = +match.groups.average;
        if (average >= 3) {
            if (result.hasOwnProperty(grade)) {
                result[grade]['student'] =  result[grade]['student'] + ', ' + name;
                let count = Object.values(result[grade]);
                count = count[0].split(', ')
                .length;
                result[grade]['average'] = (result[grade]['average'] + average);
            } else {
                result[grade] = {
                    student: name,
                    average: average
                };
            }
        }
    }
    for (let line in result) {
        console.log(line + ' Grade');
        let names = Object.values(result[line]);
        console.log('List of students: ' + names[0]);
        let count = names[0].split(', ').length;
        console.log('Average annual grade from last year: ' + (names[1] / count).toFixed(2));
        console.log('');
    }
}
schoolRegister(
    ["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]
)