

let gradeOfAli = {
    English: 'A+',
    Urdu: 'B',
    Math: 'C',
    Computer: 'A',
}
let topPhoneCompany = {
    NO_1: 'Sumsung',
    NO_2: 'Apple',
    No_3: 'HUAWEI',
    No_4: 'XIAOMI',
    N0_5: 'OPPO',
}

console.log("is the grade in English ='A'?", `${gradeOfAli.English}` === 'A');              //false
console.log("is the grade in Urdu ='B'?", `${gradeOfAli.Urdu}` === 'B');                      //true
console.log("is the grade in Math ='C'?", `${gradeOfAli.Math}` === 'C');                      //tru
console.log("is the grade in Computer ='A+'?", `${gradeOfAli.Computer}` === 'A+');              //false

console.log("Pakitan No_1 PhoneCompany ='Apple'?", `${topPhoneCompany.NO_1}` === 'Apple');               //false
console.log("Pakitan No_2 PhoneCompany ='Sumsung'?", `${topPhoneCompany.NO_2}` === 'Sumsung');          //false

console.log("Pakitan No_3 PhoneCompany ='HUAWEI'?", `${topPhoneCompany.No_3}` === 'HUAWEI');                //true                   
console.log("Pakitan No_4 PhoneCompany ='XIAOMI'?", `${topPhoneCompany.No_4}` === 'XIAOMI');                //true
console.log("Pakitan No_5 PhoneCompany ='OPPO'?", `${topPhoneCompany.N0_5}`=== 'OPPO');                        //true

