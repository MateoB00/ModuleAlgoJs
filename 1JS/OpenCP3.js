// On définit la fonction

function afficherDeuxValeurs(valeur1, valeur2) {
          console.log('Première valeur:' + valeur1);
          console.log('Deuxième valeur:' + valeur2);
    }
    
    // On exécute la fonction
    afficherDeuxValeurs(12, 'Bonjour');
    
    // On obtient dans la console
    // > Première valeur:12 
    // > Deuxième valeur:Bonjour 
    


//     class BankAccount {
//         constructor(owner, balance) {
//            this.owner = owner;
//            this.balance = balance;
//         }
//      }

//      const newAccount = new BankAccount("Will Alexander", 500);

// console.log(newAccount)



// class BankAccount {
//     constructor(owner, balance) {
//        this.owner = owner;
//        this.balance = balance;
//     }
//     showBalance() {
//        console.log("Solde: " + this.balance + " EUR");
//     }
//     showOwner(){
//         console.log("Le propriétaire est : " + this.owner);
//     }
//  }

//  const newAccount = new BankAccount("Will Alexander", 450);
// //  const secondAccount = new BankAccount('Matéo Bianco', 350);

// newAccount.showBalance(); // imprime "Solde: 500 EUR" à la console
// // secondAccount.showOwner();    // Affiche que le propriétaire du deuxieme compte est MAtéo bianco




class BankAccount {
    constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
    }
    
    showBalance() {
          console.log("Solde: " + this.balance + " EUR");
    }
    
    deposit(amount) {
          console.log("Dépôt de " + amount + " EUR");
    this.balance += amount;
    this.showBalance();
    }
    
    withdraw(amount) {
    if (amount > this.balance) {
             console.log("Retrait refusé !");
    } else {
             console.log("Retrait de " + amount + " EUR");
    this.balance -= amount;
    this.showBalance();
    }
    }
    }


    const randomNumber = Math.random(); // crée un nombre aléatoire sur l'intervalle [0, 1]
    console.log(randomNumber)
    const roundMeDown = Math.floor(495.966); // arrondit vers le bas à l'entier le plus proche, renvoie 495
    
    
    //Vous n'avez pas besoin de créer par   new  une instance de l'objet   Math  pour utiliser ces méthodes ; il suffit de les appeler sur l'objet   Math  global.
    
    


    class BePolite {
    
        static sayHello() {
              console.log("Hello!");
        }
        
        static sayHelloTo(name) {
              console.log("Hello " + name + "!");
        }
        
        static add(firstNumber, secondNumber) {
        return firstNumber * secondNumber;                            //Tout ce qui est après le return la fonction ne lis pas !!!!!
        }
        }
        
        BePolite.sayHello(); // imprime "Hello!""
        
        BePolite.sayHelloTo("Will"); // imprime "Hello Will!""
        
        const sum = BePolite.add(2, 3); // sum = 6

        console.log(sum);

        //les méthodes d'instance, qui agissent sur les instances individuelles d'une classe ;
        //les méthodes statiques, qui ne s'appuient pas sur une instance d'une classe.




console.log('\n');



// const sendWelcomeMessageToUser = (user) => {                // Non fonctionnel car il faut definir des class, Cours Ecrivez des fonctions propre OpenC
//       if (user.online) {
//       if (user.accountType === "normal") {
//              console.log("Hello " + user.name + "!");
//       } else {
//             console.log("Welcome back premium user " + user.name + "!");
//       }
//       }
//       }
      
//       sendWelcomeMessageToUser(firstUser);
      
//       sendWelcomeMessageToUser(secondUser);
      
//       sendWelcomeMessageToUser(thirdUser);









class Show {
      constructor(title, numberOfSeasons, episodesPerSeason) {
        this.title = title;
        this.numberOfSeasons = numberOfSeasons;
        this.episodesPerSeason = episodesPerSeason;
    }
  }
  
  const tau = new Show('The Story of Tau', 5, 12);   //new important
  const meldrum = new Show('The Hero of Old Meldrum', 3, 6);
  const clara = new Show('The Bugs of Isla Clara', 6, 15);
  
  const shows = [tau, meldrum, clara];
  
  // Modify the following code
  // ======================
  
  const generateInfo = (show) => {                                    //Maniere rapide de répertorier tous les titres, saisons, et episodes de chaque série
    const titleText = show.title;
    const seasonsText = show.numberOfSeasons + ' seasons';
    const episodesText = show.episodesPerSeason + ' episodes per season';
    return {
      titleText,
      seasonsText,
      episodesText
    };
  }
  
  const tauComponent = generateInfo(tau);
  const meldrumComponent = generateInfo(meldrum);
  const claraComponent = generateInfo(clara);
  
  
  const showComponents = [tauComponent, meldrumComponent, claraComponent];
  
  // ======================
  // Modify the code above
  


  console.log(showComponents);







//"La première règle des fonctions est qu'elles devraient être petites. La deuxième règle des fonctions est qu'elles devraient être encore plus petites."

//– Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship

//C'est en apprenant à laisser des commentaires clairs et cohérents que vous brillerez en tant que développeur
//Néanmoins, ne commentez pas chaque ligne ou fonction. Les commentaires doivent clarifier ce qui n'est pas immédiatement apparent à la lecture du code.



//   const getWordCount = (stringToTest) => {
//       const wordArray = stringToTest.split(' ');
//      return wordArray.length;
//      }
     
//      const getLetterCount = (stringToTest) => {
//       const wordArray = stringToTest.split(' ');
//       let totalLetters = 0;
//       for (let word of wordArray) {
     
//      // retire la ponctuation pour ne compter que les lettres
     
//      word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
//      totalLetters += word.length;
//      }
     
//      return totalLetters;
//      }
//      /*
//      ** renvoie la longueur moyenne des mots
//      ** arrondie à deux chiffres après la virgule
//      */
//      const getAverageWordLength = (stringToTest) => {
//      return parseFloat((getLetterCount(stringToTest) / getWordCount(stringToTest)).toFixed(2));
//      }
     
//      const printStringStats = (stringToTest) => {
//       console.log({
//      wordCount: getWordCount(stringToTest),
//      letterCount: getLetterCount(stringToTest),
//      averageWordLength: getAverageWordLength(stringToTest)
//      })
//      }






console.log('\n');




// TRANSFORMER ça EN PLUS FACILE !!!!

// Code avant correction

// //variable de différentes personnes
// let personne1 = "Jean";
// let personne2 = "Paul";
// let person3 = "Marcel";

// //On met la première lettre en majuscule, on salue la première personne et on donne le nombre de lettre dans son prénom
// personne1 = personne1[0].toUpperCase() + personne1.substr(1);
// const longueurPrenom1 = personne1.length;
// console.log(`Bonjour ${personne1}, ton prénom contient ${longueurPrenom1} lettres`);

// //On met la première lettre en majuscule, on salue la deuxième personne et on donne le nombre de lettre dans son prénom
// personne2 = personne2[1].toUpperCase() + personne2.substr(1);
// const longueurPrenom2 = personne2.length;
// console.log(`Bonjour ${personne2}, ton prénom contient ${longueurPrenom2} lettres`);

// //On met la première lettre en majuscule, on salue la troisième personne et on donne le nombre de lettre dans son prénom
// personne3 = personne3[2].toUpperCase() + personne3.substr(1);
// const longueurPrenom3 = personne3.length;
// console.log(`Bonjour ${personne3}, ton prénom contient ${longueurPrenom3} lettres`);






console.log('\n');


// Code après correction :

//variable de différentes personnes
let personne1 = "Jean";
let personne2 = "Paul";
let personne3 = "Marcel";

function saluer(prenom){
  //On met la première lettre en majuscule, on salue la personne et on donne le nombre de lettre dans son prénom
  const monPrenom = prenom[0].toUpperCase() + prenom.substr(1);
  const longueurPrenom = monPrenom.length;
  console.log(`Bonjour ${monPrenom}, ton prénom contient ${longueurPrenom} lettres`);
}

//On salue les 3 personnes
saluer(personne1);
saluer(personne2);
saluer(personne3);

 









const testSimpleWordCount = () => {                            //test d'erreur
      const testString = 'I have four words!';
   if (getWordCount(testString) !== 4) {
         console.error('Simple getWordCount failed!');
   }
   }
   
   const testEdgeWordCount = () => {
      const testString = '             ';
   if (getWordCount(testString) !== 0) {
         console.error('Edge getWordCount failed!');
   }
   }
   
   const testSimpleLetterCount = () => {
      const testString = 'I have twenty one letters!';
   if (getLetterCount(testString) !== 21) {
         console.error('Simple getLetterCount failed!');
   }
   }
   
   const testEdgeLetterCount = () => {
      const testString = '")(&;//!!';
   if (getLetterCount(testString) !== 0) {
         console.error('Edge getLetterCount failed!');
   }
   }







   const getWordCount = (stringToTest) => {
      const wordArray = stringToTest.split('');
      console.log("Word array in getWordCount: ");
      console.log(wordArray);
     return wordArray.length;
     }

     getWordCount('I am a fish');
     /* la console montre :
     "Word array in getWordCount:"
     ["I", " ", "a", "m", " ", "a", " ", "f", "i", "s", "h"]
     */
    
    const getWordCount2 = (stringToTest) => {         //Plutôt que de répartir la chaîne en mots, elle la répartit en lettres ! Une observation plus attentive de la fonction montre une erreur à l'appel de   split  : ce devrait être   stringToTest.split(' ')   , et non pas   stringToTest.split('')  .
       const wordArrayy = stringToTest.split(' ');
       console.log("Word array in getWordCount: ");
       console.log(wordArrayy);
      return wordArrayy.length;
      }
 
      getWordCount2('I am a fish');

