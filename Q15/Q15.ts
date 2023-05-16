
let guestList: string[] = ['Ali', 'Aslma', 'Akbar', 'Asgar'];
let guestMessage: string = ' please come to our house for dinner tonight.'

console.log(guestList);

for (let i = 0; i < guestList.length; i++) {
    console.log(
        `Hello ${guestList[i]},${guestMessage}`)              // it's show  Origenal Arrary Output
};

guestList.splice(0,3,'Farhan','Danish','Rizwan')   //Adding new person for inviting using .splice() method 

console.log("After MOdify The Array:");
console.log(guestList);

for (let i = 0; i < guestList.length; i++) {


    console.log
        (`Hello ${guestList[i]},${guestMessage} `)     //It's show  Updated Array output
}




