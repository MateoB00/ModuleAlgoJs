// {
//     const a = new Date ()

// console.log (a)

// var b = a.getFullYear()

// function age(x){
//     let z;
//     if (x < b) {
//         z = '=)))';
//     } else {
//         z = '=((((';
//     }
//     return z;
// }

// console.log(age(2001))
// }




{ 
    const today = new Date ();    //Date d'aujourd'hui             Algo d'age
const dateAnniversaire = new Date(2005, 1 , 1);

var anneeToday = today.getFullYear();
var anneeAnniversaire = dateAnniversaire.getFullYear();

var resultat = anneeToday - anneeAnniversaire;

if(resultat > 18) {
    return console.log('Tu es majeur, tu peux donc peux passé')
} else {
    return console.log('Tu es trop petit malheureusement');
}
}

// let debut = Date.now(2021, 12, 16)
// let fin = new Date(2021, 12, 15)
// let duree = fin - debut 

// console.log(duree)




