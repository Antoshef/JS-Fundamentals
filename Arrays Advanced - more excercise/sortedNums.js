function sortedNums(input) {
    console.log(input
        .sort((a,b) => b - a)
        .join(' '));
}
sortedNums([5,15,10,20,42,24,31])