function doubleNum(input) {
    let stringToNum = input.map(Number);
    let plusFive = stringToNum.map(x => x++);
    console.log(plusFive);
}
doubleNum(['2','8','5','14'])