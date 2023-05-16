

let magician: any[] = ['ALi', 'Rahul', 'Baba wt', 'Aponw', 'David Blaine', 'Harry Houdini', 'Siegfried & Roy']

let show_magicians = () => {

    magician.forEach(element => {                 //use forEach funtion to print all element in the array

        console.log( `${element}`);

    });

}

show_magicians()