function extractFile(input) {
    let index = input.lastIndexOf('\\');
    file = input.slice(index+1);
    let [name, extention] = file.split('.');
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extention}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')