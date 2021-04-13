var cognome = prompt("Inserisci il tuo cognome");

var arrayCognomi = ["Rossi", "Verdi", "Bianchi", "Neri", "Gialli"];

// Inserisce il mio cognome alla fine dell'array
arrayCognomi.push(cognome);

//Conto quanti cognomi ho all'interno dell'array
var numeroCognomi = arrayCognomi.length;
var i = 1;
//Metto in ordine alfabetico seguendo la tabella UNICODE tramire .sort
arrayCognomi.sort();



//Finchè il numero dei cognomi non raggiunge 0 il ciclo è true
while(numeroCognomi !== 0 ){
    //Stampo la POSIZIONE e i cognomi in ordine
    console.log("Posizione " + i + ": " + arrayCognomi[i - 1]);

    var secondNameList = document.getElementById("listaCognomi");
    //Stampa in HTML
    secondNameList.innerHTML += "<li> Posizione " + i + ": " + arrayCognomi[i - 1] + "</li>";

    //Decremento il numero dei cognomi ad ogni ciclo fino ad arrivare a 0
    numeroCognomi--;

    //Incremento i che in questo caso mi aiuta con il numero delle
    //posizioni e l'indice posizionale all'interno dell'array
    i++;
}

//AGGIUNGERE LA LISTA IN HTML