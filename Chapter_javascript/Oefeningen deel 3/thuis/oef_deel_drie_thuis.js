window.onload = function(){
   herhalingsoef5();}
let opleidingen = ["programmeren", "systeem","dvo"];

function oefening1()
{
console.log(`de array opleidingen bevat ${opleidingen.length} items`);
opleidingen.push('mulimedia','nog iets anders');
console.log(opleidingen);
for (i = 0; i < opleidingen.length; i++)
{
    console.log(`${opleidingen[i]} - `)
}
console.log(opleidingen.join(' - '));

}
let hondenrassen = ['chihuahua','labrador','beagle','bernersenner','heidewachtel','duitse herder','mechelse scheper']

function oefening4(){
    let getal = prompt(`geef een getal tussen 1 en ${hondenrassen.length}`,'1');
    if (getal < 1 || getal > (hondenrassen.length))
    {
        alert('getal valt buiden het bereik van de array')
    }
    let paragraaf = document.createElement('p');
    paragraaf.id = 'hond';
    let uitkomst = document.createTextNode(`U heeft gekozen voor het ras :${hondenrassen[getal-1]}`);
    paragraaf.appendChild(uitkomst);
    let llet = document.getElementById("para").appendChild(paragraaf);
    console.log(hondenrassen);
    hondenrassen.unshift('stafford','fastord');
    console.log(hondenrassen);
hondenrassen.pop();
hondenrassen.shift();
console.log(hondenrassen);
hondenrassen.splice(1,2,'lemon','kiwi');
console.log((hondenrassen));
}

function oefening8(){
    let dagen = [31,28,31,30];
    let maanden = [1,2,3,4]
}
for (let i = 0; i< dagen.length; i++)
{
    for (let j = 0; j<maanden.length; j++){
        console.log(`${dagen[i]} / ${maanden[j]} /2021)`)
    }
}
function oefening1pnt1()
{
let geboortedatum = 1990;
let nu = new Date();
let geparstegbdatum = nu.getFullYear();
console.log(geparstegbdatum);
console.log(nu);
let resultaat = nu - geparstegbdatum;
if (resultaat < 21)
{
    alert('niet oud genoeg')
}
if(resultaat > 21)
{
    alert(('oud genoeg'))
}
}
function oefening1pnt2()
{
    let vraag = prompt('sport je graag buiten')
    if (vraag.toLowerCase() === 'ja')
    {
        document.querySelector('h1').innerText = 'ok'
    }
else {document.querySelector('h1').innerHTML = '<h5 class="nok">nok</h5>'}
document.querySelector('.nok').style.color='red';
}
function oefening1pnt3()
{
    let tijd = new Date();
    if (tijd.getHours() < 12)
    {
        alert('het is voormiddag')
    }
    else
    {
        alert('het is namiddag')
    }
    console.log(tijd.getHours());
}

function oefening1pnt5()
{
    let random = Math.random();
    let getal = prompt('geef getal');
    while (getal > random){'getal is te hoog'}
}

function herhalingsoef5()
{
    let klanten = [ {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'}, {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'}, {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
        {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
        {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'}, ];

    let arr = new Array();
forEach(klant in klanten)
{
    if (klant.stad === 'Genk')
    {
        arr.unshift(klant);
    }
}
console.log(arr);
}