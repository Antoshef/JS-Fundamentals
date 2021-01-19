function softuniStudents(input) {
    function Student(name, credits, mail, course) {
        this.name = name,
        this.credits = credits,
        this.mail = mail,
        this.course = course;
    };
    let result = {};
    let events = {};

    for (let line of input) {
        if (line.includes(': ')) {
            let [course, capacity] = line.split(': ');
            if (result.hasOwnProperty(course)) {
                result[course].capacity += Number(capacity);
            } else {
                result[course] = {capacity: +capacity, count: 0};
                events[course] = [];
            }
        } else {
            line = line.split('[');
            let name = line.shift();
            line = line[0].split('] with email ');
            let credits = Number(line.shift());
            line = line[0].split(' joins ');
            let mail = line.shift();
            let course = line.shift();
            let current = new Student(name, credits, mail, course);
            if (events.hasOwnProperty(course) && result[course].capacity > 0) {
                events[course].push(current);
                result[course].capacity -= 1;
                result[course].count += 1;
            }
        }
    }
    let sorted = Object.entries(result);
    sorted.sort((a, b) => b[1].count - a[1].count);
    for (let line of sorted) {
        console.log(`${line[0]}: ${line[1].capacity} places left`);
        let ordered = Object.values(events[line[0]]);
        ordered.sort((a, b) => b.credits - a.credits);
        for (let next of ordered) {
            console.log(`--- ${next.credits}: ${next.name}, ${next.mail}`);
        }
    }
}
softuniStudents([
    'JavaBasics: 2', 
    'user1[25] with email user1@user.com joins C#Basics', 
    'C#Advanced: 3', 
    'JSCore: 4', 
    'user2[30] with email user2@user.com joins C#Basics', 
    'user13[50] with email user13@user.com joins JSCore', 
    'user1[25] with email user1@user.com joins JSCore', 
    'user8[18] with email user8@user.com joins C#Advanced', 
    'user6[85] with email user6@user.com joins JSCore', 
    'JSCore: 2', 
    'user11[3] with email user11@user.com joins JavaBasics', 
    'user45[105] with email user45@user.com joins JSCore', 
    'user007[20] with email user007@user.com joins JSCore', 
    'user700[29] with email user700@user.com joins JSCore', 
    'user900[88] with email user900@user.com joins JSCore'
])
