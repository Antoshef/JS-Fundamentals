function barcodes(input) {
    let n = input.shift();
    let pattern = /(@#+)(?<word>[A-Z][A-Za-z\d]{4,}[A-Z])(@#+)/;
    for (let i = 0; i < n; i++) {
        let result = pattern.exec(input[i]);
        let check = input[i].split('');
        let doubleCheck = check.filter(x => {
            if (x != '#' && x != '@') {
                return x;
            }
        });
        if (result && doubleCheck.length >= 6) {
            let group = check.filter(x => !isNaN(x));
            if (group.length > 0) {
                console.log(`Product group: ${group.join('')}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log('Invalid barcode');
        }
    }
}
barcodes([
    '3',
    '@#A123aH@##',
    '@###Brea0D@###',
    '@##Che4s6E@##',
])
