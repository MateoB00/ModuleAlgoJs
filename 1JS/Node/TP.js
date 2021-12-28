// var http = require('http');                            // inclure un module var "nom" = require ('nomdumodule')
// var date = require('./myfirstmodule')

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write("La date et l'heure sont actuellement: " + date.myDateTime)        //Notez que nous utilisons ./pour localiser le module, cela signifie que le module est situé dans le même dossier que le fichier Node.js.
//   res.end('Hello World!');
// }).listen(8080);




// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080


// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res){
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query
//   var txt = q.year + " " + q.month
//   res.end(txt);
// }).listen(8080);


// var http = require('http');
// var fs = require('fs');                              

// http.createServer(function (req, res) {
//   fs.readFile('index.html', function(err, data) {                      //inserer une page html
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);








// var fs = require('fs');

// //create a file named mynewfile1.txt:
// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });




// var fs = require('fs');     //La fs.open()méthode prend un "flag" comme deuxième argument, si le drapeau est "w" pour "écrire", le fichier spécifié est ouvert pour l'écriture. Si le fichier n'existe pas, un fichier vide est créé :

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });



// var fs = require('fs');       //La fs.writeFile()méthode remplace le fichier et le contenu spécifiés s'il existe. Si le fichier n'existe pas, un nouveau fichier, contenant le contenu spécifié, sera créé :

// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });



// var fs = require('fs');         //Ajouter "This is my test" à la fin du fichier "mynewfile1.txt":


// fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });




// var fs = require('fs');            //La fs.writeFile()méthode remplace le fichier et le contenu spécifiés :

// fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });




// var fs = require('fs');           //Pour supprimer un fichier avec le module File System, utilisez la fs.unlink() méthode.

// fs.unlink('mynewfile2.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });





// var fs = require('fs');                //renommer un fichier

// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });





// var http = require('http');
// var url = require('url');
// var fs = require('fs')

// http.createServer(function (req, res) {                 //sert a naviguer dans les fichier par exemple, localhost:8080/index.html ( good), localhost:8080/index2.html ( good), localhost:8080/indeeex.html ( not good)
//   var q = url.parse(req.url, true)
//   var filename = "." + q.pathname
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 not found");
//     }
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);






// var http = require('http');
// var uc = require('upper-case');                // MAJUSCULE, pour ça faut installer le module
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(uc.upperCase("Hello World!"));
//   res.end();
// }).listen(8080);



// var fs = require('fs');
// var rs = fs.createReadStream('./demofile.txt');
// rs.on('open', function () {
//   console.log('The file is open');
// });






// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// //Create an event handler:
// var myEventHandler = function () {
//   console.log('I hear a scream!');
// }

// //Assign the event handler to an event:
// eventEmitter.on('scream', myEventHandler);

// //Fire the 'scream' event:
// eventEmitter.emit('scream');


