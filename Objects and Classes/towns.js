function towns(input) {
    let town = {};
    class Towns {
        constructor(name) {
            this.name = name[0],
            this.latitude = Number(name[1]),
            this.longitude = Number(name[2])
        }

        print() {
            return `{ town: '${this.name}', latitude: '${this.latitude.toFixed(2)}', longitude: '${this.longitude.toFixed(2)}' }`
        }
    }
    let result = input.map(x => {
        x = x.split(' | ');
        return new Towns(x)
    })
    .forEach(element => {
        console.log(element.print());    
    });
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)