// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta,
// sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, 
// altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “numBomba” 
// o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha inserito un numero consentito.


var numeriRandom = []; 
var numeriUtente = []; 
var punteggio = 0; 
var tentativi = 84;  //(100 - 16) volte 
var numeroUtente; 
var numBomba = false; 
var numeroMax; 
var numeroMin; 
var livello;


//BONUS  
// chiedo all'utente il livello di difficoltà tra 0, 1, 2 
livello = parseInt(prompt("Inserisci il livello di difficoltà: 0, 1 oppure 2")); 
while (livello != 0 && livello != 1 && livello != 2) { 
    livello = parseInt(prompt("Per favore scegli il livello di difficoltà: 0, 1 oppure 2")); 
} 

switch (livello) { 
    case 0: 
        numeroMin = 1; 
        numeroMax = 100; 
        possibilita = 84; 
        titoloDomanda = parseInt(prompt("Inserisci un numero da 1 a 100")); 
    break; 
    case 1: 
        numeroMin = 1; 
        numeroMax = 80; 
        possibilita = 64; 
        titoloDomanda = parseInt(prompt("Inserisci un numero da 1 a 80")); 
    break; 
    case 2: 
        numeroMin = 1; 
        numeroMax = 50; 
        possibilita = 34; 
        titoloDomanda = parseInt(prompt("Inserisci un numero da 1 a 50")); 
    break; 
} 
//BONUS 


// genero 16 numeri random per computer 
while (numeriRandom.length < 16) { 
    //inserisco il numero solo se non è già presente nell'Array 
    var numeroCasuale = generaNumeriRandom(1, 100); 
    var cerca = presenteInArray(numeriRandom, numeroCasuale); 
    if (cerca == false) { 
    numeriRandom.push(numeroCasuale); 
    } 
} 
console.log(numeriRandom); 
document.getElementById("numeri-random").innerHTML = "Numeri bombe : " + numeriRandom; 

//l'utente inserisce un numero per 84 tentativi 
while (numeriUtente.length < tentativi && numBomba == false) { 

    // chiedo un numero all'utente per verificare che i numeri rispettino il range 
    numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100")); 

    if (presenteInArray(numeriUtente, numeroUtente) == false) { 
    numeriUtente.push(numeroUtente); 
      // se il numero dell'utente è gia presente hai perso 
        if (presenteInArray(numeriRandom, numeroUtente) == true) { 
            console.log("hai perso"); 
            document.getElementById("messaggio").innerHTML = "Che peccato, hai perso. Hai beccato il 'numero bomba': " + numeroUtente; 
            numBomba = true; 
        } else { 
            punteggio++; 
        } 
    } 
} 
console.log("numeroBomba " + numBomba);
console.log("punteggio " + punteggio);
document.getElementById("punteggio").innerHTML = "Hai totalizzato un punteggio di " + punteggio + " punti!"; 

//l'utente vince SE ha completato tutti i tentativi senza beccare le "numero bombe"
if (numeriUtente.length == tentativi) { 
    document.getElementById("messaggio").innerHTML = "Hai vinto!"; 
    console.log("hai vinto"); 
} 


// funzione che genera numero random 
function generaNumeriRandom(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
} 

//funzione che controlla che un numero sia in un certo range
function controlloRangeNumeri(min, max, number) {
    var result = false;
    if (number >= min && number <= max) {
    result = true;
    }
    return result;
}

// funzione cerca in Array confronta che l'elmento e contenuto nell'Array
function presenteInArray(array, element) { 
    var i = 0; 
    var result = false; 
    while (i < array.length && result == false) { 
    if (array[i] == element) { 
        result = true; 
    } 
    i++; 
    } 
    return result; 
} 

// funzione che richiede un numero corretto 
function richiediNumeroCorretto() { 
    while (controlloRangeNumeri(numeroMin, numeroMax, numeroUtente) == false) { 
    numeroUtente = parseInt(prompt("Per favore inserisci un numero corretto: da 1  a " + numeroMax)); 
    console.log('Numero inserito: ' + numeroUtente); 
    } 
} 

//funzione controlla che non sia inserito lo stesso numero piu di una volta 
function numUgualeInserito() { 
    while (presenteInArray(numeriUtente, numeroUtente) == true) { 
    numeroUtente = parseInt(prompt ("Avevi già inserito questo numero. Riprova con un numero diverso da " + numeroMin + " a " + numeroMax)); 
    } 
}