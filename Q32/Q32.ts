
let current_users = ['Ayesha', 'Eman', 'Kiran', 'Salman', 'Ali', 'Moona']
let new_users = ['Danish', 'Hamza', 'Aslam', 'Eman', 'Moona']


function username() {
    let userFound = true

    for (let i = 0; i < new_users.length; i++) {
        for (let j = 0; j < current_users.length; j++) {
            if (new_users[i].toUpperCase() === current_users[j].toUpperCase()) {
                console.log(`User ${new_users[i]} is alredy available.Plz enter new username.`);
                userFound = false
            }
        }
    }

    if (userFound) {
        console.log('User not available');
    }
}
username()




