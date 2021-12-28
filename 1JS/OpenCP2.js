let UserConnecte = false;
if (UserConnecte) {
   console.log("Utilisateur connecté!");
} else {
   console.log("Alerte, intrus!");
}



const numberOfSeats = 30;
const numberOfGuests = 29;
if (numberOfGuests <= numberOfSeats) {
console.log("autoriser plus d'invités")
} else {
   console.log('ne pas autoriser de nouveaux invités')
}

if (numberOfGuests == numberOfSeats) {
   console.log('tous les sièges sont occupés')
   } else if (numberOfGuests < numberOfSeats) {
   // autoriser plus d'invités
   } else {
   // ne pas autoriser de nouveaux invités
   }






// let userLoggedIn = true;                                //&&  – ET logique – pour vérifier si deux conditions sont toutes les deux vraies ;

//                                                            // ||    – OU logique – pour vérifier si au moins une condition est vraie ;
   
//                                                            // !    – NON logique – pour vérifier si une condition n'est pas vraie. 
// let UserHasPremiumAccount = true;
// let userHasMegaPremiumAccount = false;

// userLoggedIn && userHasPremiumAccount; // true
// userLoggedIn && userHasMegaPremiumAccount; // false

// userLoggedIn || userHasPremiumAccount; // true
// userLoggedIn || userHasMegaPremiumAccount; // true

// !userLoggedIn; // false
// !userHasMegaPremiumAccount; // true





// let userLoggedIIn = true;

// if (userLoggedIIn) {
//    let welcomeMessage = 'Welcome back!';
// } else {
//    let welcomeMessage = 'Welcome new user!';
// }

// //console.log(welcomeMessage); // renvoie une erreur


//

let userLoggedIIn = false;
let welcomeMessage = ''; // déclarer la variable ici

if (userLoggedIIn) {
welcomeMessage = 'Welcome back!'; // modifier la variable extérieure
} else {
welcomeMessage = 'Welcome new user!'; // modifier la variable extérieure
}

console.log(welcomeMessage); // imprime 'Welcome back!'






let firstUser = {
   name: "Will Alexander",
   age: 33,
   accountLevel: "normal"
   };
   
   let secondUser = {
   name: "Sarah Kate",
   age: 21,
   accountLevel: "premium"
   };
   
   let thirdUser = {
   name: "Audrey Simon",
   age: 27,
   accountLevel: "mega-premium"
   };


let xa = 5;
let xb = "5";

xa == xb ? console.log("True") : console.log("False !");           // Une autre manière plus courte pour le if else ( seulement si la dmd est courte)

   if (secondUser.accountLevel === 'normal' ) {
      console.log('You have a normal account!');
      } else if (secondUser.accountLevel === 'premium' ) {
      console.log('You have a premium account!');
      } else if (secondUser.accountLevel === 'mega-premium' ) {
      console.log('You have a mega premium account!');
      } else {
      console.log('Unknown account type!');
      }




//       const numberOfPassengers = 5;                //Supposons que je dois faire rentrer 10 passages dans ma voiture sans place attitré
//       for (let i = 0; i < numberOfPassengers; i++) {       //i = compteur pour le nb d'execution de la boucle c'est pour cette raison qu'elle demarre de 0
//          console.log("Passager embarqué !");
//       }

//       console.log("\n","\n")





//       const numberOfPassager = 8;               //JavaScript termine la boucle avant d'exécuter tout autre code
// for (let o = 0; o < numberOfPassager; o++) {
//    console.log("Passager embarqué !");
// }

// console.log("Tous les passagers sont embarqués !");





// const passengers = ["Will Alexander","Sarah Kate'","Audrey Simon","Tao Perkington"];

// for (let i = 0; i < passengers.length; i++) {
//    console.log("Passager embarqué !");
// }






// const passengers = [                  //Boucle FOR - IN
//    "Will Alexander",
//    "Sarah Kate",
//    "Audrey Simon",
//    "Tao Perkington"
//    ]
   
//    for (let i in passengers) {
//       console.log("Embarquement du passager " + passengers[i]);
//    }







// const passengers = [                        //Pour les cas où l'indice précis d'un élément n'est pas nécessaire pendant l'itération, vous pouvez utiliser une boucle   for… of
//    "Will Alexander",
//    "Sarah Kate",                       //Ceci produit exactement le même résultat que le for in au dessus, mais de façon plus lisible
//    "Audrey Simon",
//    "Tao Perkington"
//    ]
   
//    for (let passenger of passengers) {
//       console.log("Embarquement du passager " + passenger);
//    }






const passengers = [                                       // Utiliser For of pour ce genre de tableau avec ces class
   {
   name: "Will Alexander",
   ticketNumber: 209542
   },
   
   {
   name: "Sarah Kate",
   ticketNumber: 169336
   },
   
   {
   name: "Audrey Simon",
   ticketNumber: 779042
   },
   
   {
   name: "Tao Perkington",
   ticketNumber: 703911
   }
   ]
   
   for (let passenger of passengers) {
      console.log('Embarquement du passager ' + passenger.name + ' avec le ticket numéro ' + passenger.ticketNumber);
   }






let seatsLeft = 10;
let passengersStillToBoard = 8;
let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0) {
passengersBoarded++; // un passager embarque
passengersStillToBoard--; // donc il y a un passager de moins à embarquer
seatsLeft--; // et un siège de moins
}

console.log(passengersBoarded); // imprime 8, car il y a 8 passagers pour 10 sièges

