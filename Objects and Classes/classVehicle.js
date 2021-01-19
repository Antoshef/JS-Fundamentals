    function classVehicle() {
    class Vehicle {
        constructor(type, model, parts, fuel) {
            this.type = type;
            this.model = model;
            this.parts = parts;
            this.fuel = fuel;
            this.quality = Object.values(parts);
            this.parts.quality = this.quality[0] * this.quality[1];
        }
        drive(ad) {
            result.fuel = result.fuel - ad;
            return;
        }
    }


    let parts = { engine: 6, power: 100 };
    let result = new Vehicle('a', 'b', parts, 200);
    result.drive(100);
    console.log(result.fuel);
    console.log(result.parts.quality);
}
classVehicle()