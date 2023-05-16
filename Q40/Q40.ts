

interface album {artist:string,album:string,tracks?:number}     //interface of object


const make_album = (artist: string, album: string, tracks?: number) => {


    if (tracks) {
        console.log(artist,album, tracks)       //if user pass the track value then its run otherwise its print artis & album name

    }
    else {
        console.log(artist, album)

    }
    return make_album;
}

make_album("Nirvana", "Nevermind", 3)
make_album("Abbey Road", "The Beatles")
make_album("Lil Wayne", "Tha Carter III")
make_album("Atif Aslam", "Coke studio", 2)
