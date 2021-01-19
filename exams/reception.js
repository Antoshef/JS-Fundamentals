function reception(input) {
    let capacityPerHour = Number(input[0]) + Number(input[1]) + Number(input[2]);
    let totalStudents = Number(input[3]);
    let current = 0;
    let hours = 0;
    while (current < totalStudents) {
        if ((hours + 1) % 4 == 0) {
            hours++;
        }
            current += capacityPerHour;
            hours++;
    }
    console.log(`Time needed: ${hours}h.`);
}
reception(['3','2','5','21']
    )