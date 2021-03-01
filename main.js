// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta,
// sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, 
// altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” 
// o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha inserito un numero consentito.


var numeriRandom = [];
var numeriUtente = [];
var punteggio = 0;
var possibilita = 84;  //(100 - 16) volte
var numeroUtente;


// genero numeri random
while (numeriRandom.length < 16) {
    //inserisco solo se il numero non è già presente nell'array
    var numeroCasuale = generaNumeriRandom(1, numeroMax);
    var cerca = presenteInArray(numeriRandom, numeroCasuale);
    if (cerca == false) {
    numeriRandom.push(numeroCasuale);
    }
}
console.log(numeriRandom);
document.getElementById("numeri-random").innerHTML = numeriRandom;

//l'utente inserisce un numero per 84 tentativi
