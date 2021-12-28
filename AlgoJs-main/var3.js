// CTRL + :  Pour mettre tout en commentaire 

var x = 5;       
var z = x ** 2;

console.log('Z', z);

var x = 10;
var z = 20;
var y = x + z;

console.log('Addition', y);

var x = 20;
var z = 10;
var y = x/z;

console.log("mDivision", y);

var b = 2;
var n = Math.pow(b,2); 

console.log('N', n);


var a = 10;
a += 5;

console.log('A', a);

const person = {firstName:"Matéo", lastName:"Bianco", age:21, eyeColor:"Brown"}
const cars = ["BMW", "Audi", "Ferrari", "Opel" ]

console.log(person, cars)



function toCelsius(Degré){

    return (Degré)
}
console.log("The temperature is " + toCelsius(50) + " Celsius")






{
    function presentation(prenom, age, metier){

    console.log(prenom + " (" + age + " ans) - " + metier);
}

//presentation("Matéo", 21, "Développeur")

let professionMatéo ="Développeur Junior JS";
let age = 50
presentation("Matéo", age, professionMatéo)
}




let aze = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return (a + b);             // Function returns the product of a and b
}

console.log(aze)





const car = {type:"Fiat", model:"500", color:"white"};

console.log(car)



const personne = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function(a, b) {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log(personne) // Comment faire marcher la fonction ??


 { 
     let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let length = text.length; //Nombre de lettre de la chaine
  let text2 = "<-- Ceci est le nombre de caractère de la chaîne"

  console.log(text, length, text2)
 }



//  {
//      const a = 10;
//     const b = a * 2;
//     const c = b + 5 ;
//     const x = c - 15;
//     const y = x / 3;

// var total = [a,b,c,x,y]

// var i = 0
// for(i;i<total.length;i++){                      Var i permet de mettre tout à la ligne
//   console.log(total[i])
//}
// function myFunction(data) {

//     console.log(data)
// }

// myFunction(total);
// }






// let str = "Apple, Banana, Kiwi";
// let part = str.slice(7, 13);

// console.log(str)
// console.log(part)





{
    function testNum(a) {                                //Test avec l'âge
    let result;
    if (a > 18) {
      result = 'Entrez';
    } else {
      result = 'Sortez';
    }
    return result;
  }
  
  console.log("\n")
  console.log(testNum(12));
}

{
    function testDate (b) {                                       //Test avec la date de naissace
    let result;
    if (b < 2003){
        result = "Entrez";
    } else {
        result ="Sortez vous tu n'as pas l'âge";
    }
    return result;
}
console.log("\n")
console.log(testDate(2001))
}


{
function taille (c) {
    let result;
    if (c > "170cm"){
        result ="Tu passes";
    } else {
        result ="Sors tu n'as pas la taille";
    }
    return result;
}
console.log("\n")
console.log(taille("180cm"))
}




// {
//     function multiple (t, i){
//     let result;
//     if (t > 18){
//         result ="Tu passes";
//     } else {
//     if (i > 160){
//         result ="Tu passes";
//     } else {
//         result ="Tu ne passes pas"
//     }
// }
// console.log("\n")
// console.log(multiple(15, 159))
// }

// Date.now
// console.log(Date)  