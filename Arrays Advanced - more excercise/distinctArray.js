function distinctArray(input) {
    let result = [];
    input.forEach(element => {
        let current = element;
        let lastIndex = input.lastIndexOf(element);
        if (input.indexOf(element) !== lastIndex) {
            let removed = input.splice(lastIndex,1);
                lastIndex = input.lastIndexOf(element);
            if (input.indexOf(element) !== lastIndex) {
                removed = input.splice(lastIndex,1);
        }
        }
        result.push(current);
    });
    console.log(result.join(' '));
}

distinctArray([20, 8, 20, 20, 12, 13, 8, 5, 4])