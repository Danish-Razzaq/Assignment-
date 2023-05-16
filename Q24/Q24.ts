

let playerScore = { player1: '50', player2: '59', player3: '50', player4: '60', player5: '70', };

let employesNames = ['kamran Yousuf', 'Daniyal', 'Eman', 'Anam', 'Afsha', 'Kajal',]

console.log("is the score of player1 = 50?", `${playerScore.player1}` === '50');
console.log("is the score of player4 > 70?", `${playerScore.player4}` > '70');
console.log("is the score of player4 < 70?", `${playerScore.player4}` < '70');
console.log("is the score of player2 >= 70?", `${playerScore.player2}` >= '70');
console.log("is the score of player5 <= 70?", `${playerScore.player5}` <= '70');
console.log("is the score of player3 != 50?", `${playerScore.player3}` != '50');

//'• Tests using the lower case function:'

console.log("Is any employe of name Daniyal?", `${employesNames[1]}` === 'Daniyal');                 //its true bcz the value in 1 index is Daniyal
console.log("Is any employe of name Daniyal?", `${employesNames[1]}` === 'Daniyal'.toLowerCase()); //when we use to lowercase() functon its show false 

// • Tests using "and" and "or" operators

console.log("Any employe of name Eman?", `${employesNames[2]}` === 'Eman' || 'DAniyal');     //true bcz ||operator give true if only one value match

console.log("Any employe of name Anam?", `${employesNames[3]}` === 'Afsha' && 'Kajal' && 'Anam'); //false bcz(&& operator)give false if only one value false

// • Test whether an item is in a array

console.log("Any Person of name Kajal?", `${employesNames.includes('Kajal')}`);          // true bcz its Exiest

// • Test whether an item is not in a array

console.log("Any Person of name Sadaf? ", `${employesNames.includes('Sadaf')}`);               //false bcz its not Found      

