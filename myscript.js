var cognome = prompt("Inserisci il tuo cognome");

var arrayCognomi = ["Rossi", "Verdi", "Bianchi", "Neri", "Gialli"];

// Inserisce il mio cognome alla fine dell'array
arrayCognomi.push(cognome);

//Conto quanti cognomi ho all'interno dell'array
var numeroCognomi = arrayCognomi.length;
var i = 1;

arrayCognomi.sort();
console.log(arrayCognomi)


while(numeroCognomi !== 0 ){
    console.log("Posizione " + i + ": " + arrayCognomi[i - 1]);
    numeroCognomi--;
    i++;
}
