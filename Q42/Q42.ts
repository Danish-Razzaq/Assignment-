

let magicians: string[] = ['ALi', 'Rahul','Aponw', 'David Blaine', 'Harry Houdini'];

const make_great = (magicians: string[]) => {
    return  magicians.map(magician => `${magician} the Great`)      //use the map method to create a new array with some updation
   
}

let show_magicians = (magicians:string[]) => {

    for(let magician of magicians){

        console.log(magician);
    }
}
magicians = make_great(magicians);
show_magicians(magicians);
