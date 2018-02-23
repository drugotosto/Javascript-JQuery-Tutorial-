
/* *******************************************											******************************************
	 *******************************************	JAVASCRIPT TUTORIAL	******************************************
	 *******************************************											******************************************/										

// Serve per utilizzare la versione più recente delle funzionalità di Javacript
'use strict'

// Definisco una semplice variabile (anche var va bene)
let nome="CIAO", eta=29;

//Definisco una costante lowercase (il cui valore immutabile viene calcolato runtime)
const codice=426;

//Definisco una costante UPPERCASE (il cui valore immutabile è risaputo pre-runtime = per contenere valori HARD-CODED)
const COLOR_RED="#F00";

/*
	************************************************ DATA TYPES **********************************************

 	Ricordandosi che Javascript è una tipologia di linguaggio "dynamically typed".
 	Esistono 7 diversi tipi di dati:

 		-	Number: Appartengono a questa categoria sia gli interi che flotting point che i "valori numerici speciali" (e.g. Infinity - NaN)
	
 		- String

 		- Boolean

 		- null: Ha il significato di: "nulla", "vuoto, "valore sconosciuto"

 		- undefined: Ha il significato di: "valore non assegnato". Rappresenta una nuova variabile creata a cui però non è stato assegnato alcun valore

 		- Object: A differenza degli altri tipi primitivi questo viene utilizzato per collezionare dati ed entità più complesse

 		- symbol: 		
 
 	*/

 	/*
		********************************************* OPERATORS ***********************************************

 		Ogni operatore ritorna un valore di output che potrà essere utilizzato (anche lo stesso operatore di =).
		Tale caratteristica diventa rilevante quando si prendono in considerazione i "prefix/postfix" operatori di inceremento "++" e deceremento "--" 		
	
 		- typeof: operatore/funzione che ritorna il tipo dell' argomento passato in input.

 		- +: Operatore che può essere applicato sia come operatore unario che binario (con numeri e/o stringhe).
 				 Se applicato in maniera unaria ad un singolo operando allora effettua la conversione del valore in un tipo numerico (utile quando si deve fare la conversione in un numero di una stringa fornita dall'utente)
	
		- +=, *=, /= ...: Sono tutti operatori di "modify-in-place" di una variabile 

 	*/

 	/*
		******************************************* COMPARISONS ************************************************

		Quando si vanno a comparare valori di tipi differenti allora il loro valore viene convertito in un numero
		L'operatore === a differenza di == tiene in considerazione anche il tipo dei valori che si confrontano oltre al valore 
		
 	*/


