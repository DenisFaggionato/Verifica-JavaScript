//Nel ciclo while vengono dichiarate solamente le condizioni del ciclo, in un for insieme alle condizioni va scritto il valore iniziale di un contatore e il decremento o diminuimento ad ogni ciclo.
let i=0;

//ciclo while che scrive nella console i numeri tra 0 e 5
while(i<=5)
{
    console.log(i);
    i++;
}
//ciclo for che scrive nella console i numeri tra 0 e 5
for(i=0 /*nel valore iniziale posso anche inserire direttamente una variabile a piacere da usare come contatore*/;i<=5;i++)
{
    console.log(i); //Si può vedere che con il ciclo for utilizzo meno righe di codice, la variabile i potrei dichiararla direttamente all'inizio del ciclo insieme al suo incremento
}