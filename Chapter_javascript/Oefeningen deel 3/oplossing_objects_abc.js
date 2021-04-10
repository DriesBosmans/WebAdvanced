window.onload = function () {
    oefening5e();
}

function oefening1() {
    let persoon = {naam: 'achternaam', voornaam: 'Peter', email: 'Peter@pxl.be'};
    console.log('De naam van de persoon is: ' + persoon.naam);
    console.log('De voornaam van de persoon is: ' + persoon.voornaam);
    document.getElementById('naamtd').innerText = persoon.naam;
    document.getElementById('voornaamtd').innerText = persoon.voornaam;
    document.getElementById('emailtd').innerText = persoon.email;
    document.getElementsByClassName('data')[0].innerHTML = persoon.naam;
    document.getElementsByClassName('data')[1].innerHTML = persoon.voornaam;
    document.getElementsByClassName('data')[2].innerHTML = persoon.email;
    /*document.getElementsByClassName('data').forEach((element)=>{
        element.innerHTML = persoon.naam;
    })*/
}

function oefening2() {
    let persoon = {
        naam: 'achternaam',
        voornaam: 'Peter',
        email: 'Peter@pxl.be',
        zinvorm: function () {
            return `Mijn naam is ${this.voornaam} ${this.naam} en mijn email is ${this.email}`
        }
    };
    document.getElementById('persoon').innerText = persoon.zinvorm()

}

function oefening3() {
    let persoon = {
        naam: 'achternaam',
        voornaam: 'Peter',
        email: 'Peter@pxl.be',
        zinvorm: function () {
            return `Mijn naam is ${this.voornaam} ${this.naam} en mijn email is ${this.email}`
        },
        lengte: 180,
        gewicht: 70,
        leeftijd: 19
    };
    let objectkeys = Object.keys(persoon);
    let objectValues = Object.values(persoon); // ['achternaam', 'peter', function(){ return this.voornaam}]
    let ul = document.createElement('ul');
    for (let i = 0; i < objectkeys.length; i++) {
        let li = document.createElement('li');
        let innerText = '';
        console.log(objectkeys[i]);
        if (objectkeys[i] === 'zinvorm') {
            innerText = objectkeys[i] + ' ' + persoon[objectkeys[i]](); // persoon['zinvorm']
        } else {
            innerText = objectkeys[i] + ' ' + objectValues[i];
        }
        li.textContent = innerText;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);

}

function oefening3b() {
    let persoon = {
        naam: 'achternaam',
        voornaam: 'Peter',
        email: 'Peter@pxl.be',
        zinvorm: function () {
            return `Mijn naam is ${this.voornaam} ${this.naam} en mijn email is ${this.email}`
        },
        lengte: 180,
        gewicht: 70,
        leeftijd: 19
    };

    let ul = document.createElement('ul');
    for (const key in persoon) {
        let li = document.createElement('li');
        let innertext = '';
        if (typeof persoon[key] == "function") {
            innertext = `${key}: ${persoon[key]()}`;
        } else {
            innertext = `${key}: ${persoon[key]}`;
        }
        li.innerText = innertext;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

function oefening4() {
    let persoon = {
        naam: 'achternaam',
        voornaam: 'Peter',
        email: 'Peter@pxl.be',
        zinvorm: function () {
            return `Mijn naam is ${this.voornaam} ${this.naam} en mijn email is ${this.email}`
        },
        lengte: 180,
        gewicht: 70,
        leeftijd: 19
    };

    delete persoon.lengte;
    delete persoon.gewicht;


    console.log(Object.entries(persoon));
}

function oefening5a(){
    let klanten = [
        {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
        {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
        {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
        {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
        {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'}
    ];

    const uitkomst = klanten.filter(klant => klant.stad === 'Genk');

}

function oefening5b(){
    let klanten = [
        {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
        {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
        {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
        {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
        {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'}
    ];

    klanten.forEach(klant => console.log(klant.naam.length));

}

function  oefening5c(){
    let klanten = [
        {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
        {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
        {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
        {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
        {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'}
    ];

    for (let i = 0; i < klanten.length; i++) {
        let stadsnaam = 'Antwerpen';
        for (let j = 0; j < i; j++) {
            stadsnaam += '-Antwerpen';
        }

        klanten[i].stad = stadsnaam;
    }
    console.log(klanten);
}

function oefening5d(){
    let klanten = [
        {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
        {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
        {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
        {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
        {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'}
    ];
    let namen = '';

    for (let i = 0; i < klanten.length; i++) {
       if (klanten[i].voornaam.length % 2 === 0){
           console.log(namen + klanten[i].voornaam.toUpperCase());
       }else{
           console.log(namen + klanten[i].voornaam);
       }
       namen += klanten[i].voornaam;
    }
}

function oefening5e(){
    let klanten = [
        {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
        {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
        {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
        {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
        {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'}
    ];
    klanten.forEach(klant => {
        let par = document.createElement('p');
        let arr = Object.values(klant);
        par.innerHTML = arr;
        document.body.appendChild(par);
    });
}