window.onload = function(){
    oefening5();
}

let persoon = {naam: `bosmans`,
voornaam: `Dries`,
    klas: '1prob',
    geboortedatum: '28-05-1990',
zinvorm: function () {return `Mijn naam is ${this.naam} ${this.voornaam} en ik ben geboren
    op ${this.geboortedatum}`}
};

function oefening1()
{
    console.log(persoon);
    document.getElementById('id1').innerText = persoon.naam;
    document.getElementById('id2').innerText = persoon.voornaam;
    document.getElementById('id3').innerHTML = persoon.klas;
}

function oefening2()
{
    console.log(persoon.zinvorm());
    persoon = {
        gewicht: "90 kg"
        ,oogkleur: 'groen'
    };
    delete persoon.gewicht;
    delete persoon.oogkleur;

}

function oefening3()
{
    let objectkeys = Object.keys(persoon);
    let objectvalues = Object.values((persoon));
    let ul = document.createElement('ul');
    for (i = 0; i < objectkeys.length; i++) {
        let innertext = "";
        let li = document.createElement('li');
        console.log(objectkeys[i])
        if (objectkeys[i] === 'zinvorm') {
            innertext = objectkeys[i] + ' ' + persoon[objectkeys[i]]();
        } else {
            innertext = objectkeys[i] + ' ' + objectvalues[i];
        }
        li.textContent = innertext;
        ul.appendChild(li);

    }
    document.body.appendChild(ul);
}
let klanten = [{voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
    {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
    {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
    {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
    {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'} ];

function oefening5(){
    let uitkomst = klanten.filter(klant => klant.stad === 'Genk');
    console.log(uitkomst);
    for (i=0 ; i< klanten.length; i++)
    {
        console.log(klanten[i].naam.length);

    }
    for (i = 0; i < klanten.length; i++)
    {
        let stadsnaam = 'antwerpen';
        klanten[i].stad = stadsnaam;
        for (j = 0; j<i; j++)
        {
            klanten[i].stad += stadsnaam;

        }
        console.log(klanten[i].stad)
    }

}