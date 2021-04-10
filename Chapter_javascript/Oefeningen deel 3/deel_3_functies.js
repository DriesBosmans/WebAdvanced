let getal1 = prompt('Geef getal1)');
let getal2 = (prompt('geef getal2'));
let resultaat = vermenigvuldig(getal1, getal2)
function vermenigvuldig(getal1, getal2)
{
    let resultaat = getal1 * getal2;
    return resultaat;
}
console.log(resultaat);
document.getElementById('test').innerHTML = resultaat;

//oef 2
resultaat = verschil(getal1)
function verschil(getal1)
{
    let getal3 = 100;
    let resultaat = getal1 - getal3;
    return resultaat;
}
console.log(resultaat);

//oef 3
resultaat = ifVijftig(getal1, getal2);
function ifVijftig(getal1, getal2)
{
    let string50 = 'NietVijftig';
    if (getal1 == 50 || getal2 == 50 || getal1+getal2 == 50 )
    {
        string50 = 'Hoefa';
    }
    return string50;
}
document.getElementById('vijftig').innerHTML = resultaat;

//oef 4

let hallo = prompt("doe een zin");
hallo = Hallo2(hallo);
function Hallo2(hallo)
{
    if(hallo.substring(0,5) == 'Hallo')
    {
        
    }
    else 
    {
      hallo = 'Hallo' + toLowercase(hallo.substring(0,1))
    }
return hallo;
    
}
document.getElementById('joww').innerHTML = Hallo2(hallo);

//oef5
let oef5 = prompt("geefzin");
let resultaat = zinSplitsen()
{
    let randomm = prompt("geef random");
    if (randomm == NaN)
    {
        alert('geef fatsoenlijk getal')
    }
    else {
        resultaat2 = resultaat.split()
    }
}
