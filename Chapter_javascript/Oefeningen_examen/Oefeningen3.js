


function oefening1(){

    let array1 = ['Digitale Vormgeving', 'Programmeren','Internet of things'];
    array1.push('Multimedia','Commtech');
    for(let i=0;i<array1.length;i++)
    {
        console.log(array1[i]);
    }
    console.log(array1.length);

    let oef3 = document.createElement('h1');
    oef3.innerText = `${array1[0]} - ${array1[1]}`;
    oef3.style.color = "red";
    oef3.id = 'oef3'



    oef3.style.background = 'blue';
        oef3.innerText = `${array1[0]} - ${array1[1]}`;
    document.body.appendChild(oef3);

}
let rassen = ['beagle','stafford','labrador','dalmatier','heidewachtel','poedel','duitse herder','malteser','golden retriever','border collie'];
function oefening4(){
    let getal = prompt('geef een getal tussen 1 en 10',1);
    let titel = document.createElement('h1');
    document.body.appendChild((titel))

    if(getal >0){
        titel.innerText = `${rassen[getal-1]}`;
    }
    else titel.innerText = 'niks ga weg';

}
function oefening5(){
    rassen.unshift('Nieuwe hond');
    for(let ras of rassen)
    {
        console.log(ras);
    }
    console.log(rassen)
}
function oefening6(){
    rassen.pop();
    rassen.shift();
    console.log(rassen);
    rassen.splice(2,1,'wtf');
    console.log(rassen);
}

function oefening8(){
    let
        dagen = [31,28,31,30,31],
        maandenomschrijving = ['januari','februari','maart','april','mei'],
        jaar = 2021,
        dagomschr= ['maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag','zondag'];

    for(let i = 0; i<maandenomschrijving.length; i++){
        for(let j = 0; j<dagen[i]; j++)
        {

            console.log(`${j+1} ${maandenomschrijving[i]} ${jaar}`);
        }
    }
}
function oefening11()
{
    let jaar = prompt('geef uw geboortejaar');
    let nu = new Date;
    let result = nu.getFullYear()-jaar
    console.log(nu.getFullYear());
while (result < 20){
    alert('je bent te jong');
    console.log(result);
    jaar = prompt('leeftijd');
}
if(result >= 20){
    alert('je bent oud genoeg')
}


}
function oef12(){
    let tijdstip = new Date(),
        titel = document.createElement('h1'),
        dagdeel = document.createElement('p');

    document.body.appendChild(titel);
    document.body.appendChild(dagdeel);
    titel.innerText = tijdstip.toTimeString();
    titel.id = 'tijdstip';
    document.querySelector('#tijdstip').style.background='blue';
    if (tijdstip.getHours() < 6) dagdeel.innerText="nacht";
    else if(tijdstip.getHours() >6 && tijdstip.getHours()<12) dagdeel.innerText='voormiddag';
    else dagdeel.innerText = 'namiddag/avond';
}

function oef118()
{
    let zin = prompt('geef een zin om te controleren op klinkers')
    let zinarray = zin.split("");
    let e =0,
        i=0,
        a=0,
        o=0,
        u=0;
    for (let k = 0; k<zinarray.length; k++)
    {
        switch(zinarray[k])
        {
            case 'a': a++; break;
            case 'e': e++; break;
            case 'i': i++; break;
            case 'o': o++; break;
            case 'u': u++; break;
        }
    }
    console.log(`${a}x a, ${e}x e, ${i}x i, ${o}x o, ${u}x u`);
}

function oef119(){
    let getal = prompt('geef een getal'),
        i = 1,
        getalarray = [parseInt(getal)],
        hoogste = 0;
    while (getal != 'stop'){
        getal = prompt(`geef getal (${i})`);
        if (parseInt(getal)) {
            i++;
            getalarray.push(parseInt(getal))
            console.log(parseInt(getal))
            if (parseInt(getal) > hoogste){
                hoogste = parseInt(getal);
            }
        }
    }

    console.log(`het hoogste getal is ${hoogste}`);
    console.log(getalarray);
}

function oef117(){
    let zin = prompt('geef een zin'),
        zinsdeel = zin.split(" ");
    for(let i = 0; i<zinsdeel.length;i++)
    {
        zinsdeel[i] = zinsdeel[i].substr(0,1).toUpperCase() +
            zinsdeel[i].replace(zinsdeel[i].substr(0,1),'').toLowerCase();
        console.log(zinsdeel[i]);
    }
    zin = zinsdeel.join(' ');
    console.log(zin);
}
let klanten = [ {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
    {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
    {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
    {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
    {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'}, ];

function nr1(){
    let genkies = [];
    for(i=0;i<klanten.length;i++)
    {
        if(klanten[i].stad === 'Genk')
        {
            genkies.push(klanten[i]);
        }
    }
    console.log(genkies);
}
function nr2(){
    for(let i=0;i<klanten.length;i++){
        klanten[i].lengte = klanten[i].naam.length;
    }
    console.log(klanten);
}
function nr3(){
    for(i=0; i< klanten.length; i++){
        let stadsnaam = 'antwerpen'
        klanten[i].stad = stadsnaam;
        for (j=0; j<i; j++){
            klanten[i].stad += '-'+stadsnaam;
        }
        console.log(klanten[i].stad);
    }

}
// vergeet array.filter niet te kopieren
function nr4(){
    let namenstring = '';
    for (i=0; i<klanten.length; i++)
    {
        if(namenstring.length%2===0){
            namenstring+=klanten[i].voornaam.toUpperCase();
        }
        else namenstring += klanten[i].voornaam;
        console.log(namenstring);
    }
}
function nr5(){
    for(let i = 0; i<klanten.length; i++){
    let paragraaf = document.createElement('p');
        paragraaf.innerText = `${klanten[i].voornaam} ${klanten[i].naam} woont in ${klanten[i].stad}`;

    document.body.appendChild(paragraaf);

    }
}
//---------------------------------------------------------------
//oefeningen deel 4
window.onload = oef56;

function oef43(){
    let rood = document.querySelector('p#red');
    rood.style.color = 'red';
    let weg = document.querySelector('p#weg');
    document.querySelector('p#weg').parentElement.removeChild(weg);
    let pandix = document.createElement('h1');
    pandix.innerText="Welkom PandiX";
    document.querySelector('#header').appendChild(pandix);

    let aside = document.createElement("aside");
    aside.innerText="adres pxl elfde linie";
    document.getElementById('main').appendChild(aside);
}

function oef44(){
    let boeken = [{titel: "the theory of everything", auteur: "stephen hawking", gelezen: true},
        {titel: "12 rules for life", auteur: 'Jordan Peterson', gelezen: false }]
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    let gelezen;
    for(i = 0; i<boeken.length;i++)

    {
        switch(boeken[i].gelezen)
        {case true: gelezen= 'al';
        break;
        case false: gelezen = 'nog niet';
        break;}
        let li = document.createElement('li');
        let text = document.createTextNode(`"${boeken[i].titel}" geschreven door ${boeken[i].auteur} heb ik ${gelezen} gelezen.`);
        document.querySelector('ul').appendChild(li);
        li.appendChild(text);
    }
    }
    function oef51(){
    let button = document.createElement('button'),
        textbox = document.createElement('input'),
        button2= document.createElement('button');
        paragraaf = document.createElement('p');
    button.innerText = 'Tonen';
    button.id = 'btntonen';
    button2.id = 'btnwissen';
    textbox.id = 'txttextbox';
    textbox.type = 'text';
    button2.innerText = 'wissen'
    paragraaf.id = 'paragraafp';
    //paragraaf.innerText = 'test';
    document.body.appendChild(button);
    document.body.appendChild(textbox);
    document.body.appendChild(button2);
    document.body.appendChild(paragraaf);
    button.addEventListener('click',tonen);
}
function tonen(){
    let input = document.querySelector('#txttextbox').value;
    console.log(input);
    let span = document.createElement('span');
    document.querySelector('p#paragraafp').insertBefore();
    span.textContent = input;
    span.style.display = 'block';

    Array.from(span.parentElement.children).forEach(child => {
        child.style.color = 'black';
        child.style.fontWeight = 'normal';
    })
    span.style.fontWeight = 'bold';
    span.style.color = 'red';

}

function oef54(){
let titel = document.createElement('h1');
titel.innerText = 'titel';
titel.id = 'titl'
titel.style.fontSize = '24px';
titel.style.display = 'inline-block'
document.body.appendChild(titel);

titel.addEventListener("mouseenter", groter);
titel.addEventListener("mouseleave", kleiner);
}
function groter(){
    let titel = document.getElementById('titl');
    titel.style.fontSize = '30px';
}
function kleiner(){
    let titel = document.getElementById('titl');
    titel.style.fontSize = '24px';
}
let items = [];
function oef56(){

document.getElementById('submit').onclick = additemtolist;

}
function additemtolist(){

    let item = {wat: document.getElementById('wat').value, wanneer: document.getElementById('wanneer').value};
    items.push(item);

    createElement(item)
}
function createElement(item)
{
    let div = document.querySelector('#todo');
    let titelwat = document.createElement('h4');
    let wannr = document.createElement('p');
    let deleteitem = document.createElement('button');
    let todoitem = document.createElement('div');
    titelwat.innerText = item.wat;
    wannr.innerText = item.wanneer;
    div.appendChild(todoitem);
    todoitem.appendChild(titelwat);
    todoitem.appendChild(wannr);
    todoitem.appendChild(deleteitem)
    todoitem.style.border = '1px solid blue';
    //deleteitem.addEventListener('click',deletedit(todoitem, item));


}

function deletedit(todoitem, item)
{
    let index = items.indexOf(item);
    console.log(index);
    // todoitem.parentElement.removeChild(todoitem);

}