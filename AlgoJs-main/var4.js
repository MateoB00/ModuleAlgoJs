//  {
//      const a = 10;
//     const b = a * 2;
//     const c = b + 5 ;
//     const x = c - 15;
//     const y = x / 3;

// var total = [a,b,c,x,y]

// var i = 0
// for(i;i<total.length;i++){                      //Var i permet de mettre tout à la ligne
//   console.log(total[i])
// }
// function myFunction(data) {

//     console.log(data)
// }



 



// myFunction(total);
// }

function Age(date) { 
  var diff = Date.now() - date.getTime();
  var age = new Date(diff); 
  return Math.abs(age.getUTCFullYear() - 1970);
}

console.log(Age(new Date(1999, 1, 7))); //Date(année, mois, jour)

{
  const wa = new Date;

console.log(wa);
}



{
  let debut = Date.now();
console.log(debut);
}








