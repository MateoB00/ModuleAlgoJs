let cookiesInJar = 10;
cookiesInJar -= 2;
cookiesInJar += 12;

console.log("Il y a", cookiesInJar, "cookies dans le pot")      



let numbersOfLikes = 10
numbersOfLikes ++          // ++ = +1
numbersOfLikes --          // -- = -1
numbersOfLikes --
console.log(numbersOfLikes)


let costOfProduct = 10
let numbersOfProducts = 5
let totalCost = costOfProduct * numbersOfProducts
let costOfOneProduct = totalCost / numbersOfProducts

console.log("Prix total des produits =",totalCost,',',"Prix d'un seul produit =", costOfOneProduct)


let numbersOfCats = 2
numbersOfCats *= 5         // *= = 2*5 = 10
numbersOfCats /= 2         //  /= 10 / 2 = 5

console.log(numbersOfCats)

console.log('\n')


let compteur = 0;
compteur++;
compteur = 10;

console.log(compteur)



const nombrePostParPage = 20;
//nombrePostParPage = 30;        // Retournera une erreur dans la console car on ne peut PAS CHANGER LA VALEUR d'un CONST, c'est comme la date de naissance d'un utilisateur, le nom d'une entreprise ou les heures dans une journée



                              //TYPES


let integerCalculation = 1 + 2;  // donne 3               C'est un type number          1
let weirdCalculation = 0.1 + 0.2;  // on attend 0.3, réponse réelle 0.30000000000000004

console.log(weirdCalculation)


let userIsSignedIn = true;          // Type Boolean true or false                      2 
let userIsAdmin = false;

const myName = `Matéo`;                      // Type chaine de caractère   (string)               3
const salutation = `Bienvenue sur mon site ${myName}!`;
console.log(salutation);  //retournera “Bienvenue sur mon site Alexander!”  

 
let myBook = {                                   //Type Objet
    title: 'The Story of Tau',                     // title + author + numberofpages + IsAvailable sont des clés
    author: 'Will Alexander',
    numberOfPages: 250,
    isAvailable: true                         // is Available = c'est disponible
    };

let bookTitle = myBook.title;                // Acceder aux données des clés 
let bookPages = myBook.numberOfPages;            // 250

let bookTitle2 = myBook["title"];            // Deuxieme maniere de recuperer les données  
let bookPages2 = myBook["numberOfPages"];            // 250




console.log(bookTitle, bookPages)
console.log(bookTitle2, bookPages2)






class Book {                   //une classe est un modèle pour un objet dans le code.     class
    constructor(title, author, pages){
this.title = title;
this.author = author;
this.pages = pages;
}
}

let mySecondBook = new Book("L'histoire de Taro", "Moi meme qui m'appelle Alex", 250)


console.log("\n",mySecondBook)                     






let firstFrontPlaceForGuest = "Sarah Kate"
let secondFrontPlaceforGuest = "Audrey Simon"



let guests = ["Sarah Kate", "Audrey Simon", "Will Alexander"];      //tableau (Array)

let firstGuest = guests[0];      // "Sarah Kate"                      Ne pas oublier que l'indice par de 0 et pas 1
let thirdGuest = guests[2];       // "Will Alexander"
let undefinedGuest = guests[12]          // undefined
let howManyGuest = guests.length   //3

console.log(firstGuest,thirdGuest,undefinedGuest,howManyGuest)  


let artistProfile = {
    name: "Tao Perkington",
    age: 27,
    available: true      //True
    };
    let allProfiles = [artistProfile]; // nouveau tableau contenant l'objet ci-dessus

    artistProfile.available = false; // modification de l'objet en false

    console.log(allProfiles) // affiche { nom: "Tao Perkington", âge: 27, disponible: false }     allProfiles prend maintenant la valeur false pourtant dans la classe nous avons mis qu'il était disponible
    
    guests.push("Matéo"); //ajoute "Matéo" à la fin de notre tableau guests, peut reprendre plusieurs chaine de texte ou variable directement

    guests.unshift("Julien") //"Julien " est ajouté au début du tableau guests

    // guests.pop() //Supprime la derniere personne du tableau

    console.log(guests)
    





    let chiffre = 24
    let neww = 'Le chiffre attendu est $chiffr '
    console.log(neww);