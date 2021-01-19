function sortAnArray(input) {
    input.sort(function (a, b) {
        let aLength = a.length;
        let bLength = b.length;
        // let aLetter = a[0];
        // aLetter = aLetter.toLowerCase();
        // let bLetter = b[0];
        // aLetter = aLetter.toLowerCase();
        if (aLength < bLength) return -1;
        if (aLength > bLength) return 1;
        else {
            if (a.charCodeAt(0) < b.charCodeAt(0)) return -1;
            if (a.charCodeAt(0) > b.charCodeAt(0)) return 1;
            else {
                if (a.charCodeAt(1) < b.charCodeAt(1)) return -1;
                if (a.charCodeAt(1) > b.charCodeAt(1)) return 1;
            }
        }
    })
    let result = [];
    input.forEach(element => {
        result.push(element);
    });
    result.forEach(element => {
        console.log(element);
    })
}
sortAnArray(["Isacc", "Theodor", "Jack", "Harrison", "George"]);