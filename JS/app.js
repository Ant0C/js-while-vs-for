//Chiedere numero al utente
//Separazione dei numeri dispari da numeri pari è da valori NaN

let numeriArray = []
let numero

while (numeriArray.length < 10 ) {

    let numero = parseInt(prompt("Scegli un numero"))
    let numeriDispari = numero % 2
    //console.log(numeriDispari)

    //Operazioni per scremare i valori NaN è numeri pari
 	if (isNaN(numero)) {
 		continue
 	}

    if (numeriDispari === 0) {
        continue
    }

    //inserimento dei numeri dispari nell'array
 	numeriArray.push(numero)
    
}

// Stampo nel DOM i numeri presenti nell'Array (numeri solo dispari)

for(let i = 0; i<numeriArray.length; i++){
    document.getElementById("numeri").innerHTML = numeriArray;
}

console.log(numeriArray)


