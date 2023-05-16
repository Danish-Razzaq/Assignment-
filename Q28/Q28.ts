

let input = 66;     //user input

if (input <= 0) {
    console.log('PLz Enter vaild Age');
}
else if (input < 2) {
    console.log('You are a Baby');
}
else if (input > 2 && input < 4) {
    console.log('You are a kid');

}

else if (input >= 13 && input < 20) {
    console.log('You are a teenager');

}
else if (input >= 20 && input <= 65) {
    console.log('You are a adult person');

}
else {
    console.log('The person is an elder');

}