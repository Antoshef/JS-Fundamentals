function filtered(input) {
    console.log(input
        // filter odd indexes
        .filter((v, i) => (i % 2) == 1)
        // double odd index
        .map(x => x * 2)
        // reverse method
        .reverse());
}
filtered([2,10,3,11,8,14])