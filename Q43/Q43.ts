
let magicians: string[] = ['ALi', 'Rahul', 'Aponw', 'David Blaine', 'Harry Houdini'];

let greatMagicians: string[] = [];

let make_great = (magicians: string[]): string[] => {

    for (const magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}

greatMagicians = make_great(magicians);

let show_magicians = (magicians: string[]) => {

    magicians.forEach(element => {
        console.log(`${element}.`);
    });
}
console.log('=> Output of Origenal Array:');
show_magicians(magicians);                     //origanl name aray 
console.log('=> Output of dublicate Array:');
show_magicians(greatMagicians)             //Seperate array of modify name
 