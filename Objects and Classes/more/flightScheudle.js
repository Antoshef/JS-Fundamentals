function flight(input) {
    let flights = input.shift();
    let cancelled = input.shift();
    let status = input.shift();
    let result = {};
    for (let line of flights) {
        line = line.split(' ');
        let number = line.shift();
        let destination = line.join(' ');
        result[number] = {Destination: destination,
            Status: 'Ready to fly'};
    }
    for (let line of cancelled) {
        let [num, stat] = line.split(' ');
        if (result.hasOwnProperty(num)) {
            let value = Object.values(result[num]);
            result[num] = {
                Destination: value[0],
                Status: stat
            }
        }
    }
    let answer = Object.entries(result);
    for (let line of answer) {
        let check = line[1];
        if (check['Status'] == status[0]) {
            console.log(check);
        }
    }
}
flight(
    [["WN269 Delaware","FL2269 Oregon","WN498 Las vegas","WN3145 Ohio","WN612 Alabama",
    "WN4010 New York","WN1173 California","DL2120 Texas","KL5744 Illinois","WN678 Pennsylvania"],
    ["DL2120 Cancelled","WN612 Cancelled","WN1173 Cancelled","SK330 Cancelled"],
    ["Ready to fly"]]
 
)