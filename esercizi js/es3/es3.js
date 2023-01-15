let a = prompt("Quanti numeri vuoi inserire?"); 
let numeri = [];
let b = 0;
let controllo;

while(a>0)
{
    numeri[b] = prompt("Inserisci un numero:");
    b++;

    a--;
}
decrescente()
function decrescente()
{
    b--;
    while(b>0)
    {
        controllo = numeri[b]
        b--;
        console.log(numeri[b]);
        if(controllo<numeri[b] )
        {
            continue;
        }
        else
        {                
            alert("I numeri inseriti non sono in ordine decrescente.");
            return;
        }
    }
    alert("I numeri inseriti sono in ordine decrescente");

}