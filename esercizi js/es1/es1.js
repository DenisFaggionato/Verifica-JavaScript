let esponente = prompt("Quanti numeri vuoi inserire?");
let numeri = [];
let molti = 1;
let i
for(i=0;i<esponente;i++){
    numeri[i] = prompt("Inserisci un numero");
}
console.log(numeri)
for(i--;i>=0;i--){
    molti= molti*numeri[i];
    
}
console.log(Math.pow(molti,esponente))
//da finire
