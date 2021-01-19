function cutAndReverse(input) {
    let midle = input.length / 2;
    let first = input.slice(0, midle)
    .split('')
    .reverse()
    .join('');
    let second = input.slice(midle)
    .split('')
    .reverse()
    .join('');
    console.log(first+'\n' +second);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')