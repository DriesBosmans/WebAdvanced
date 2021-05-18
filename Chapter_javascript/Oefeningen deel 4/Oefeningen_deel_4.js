window.onload = function () {
    oefening2();
}

function oefening2()
{
    let list = document.getElementsByTagName("p");
    for (let i = 0; i<list.length; i++)
    {
        list[i].style.backgroundColor = "pink";
    }
    list[0].style.fontFamily = "Arial, Verdana, sans-serif";
    list[1].style.backgroundColor= 'pink';
    let titel = document.getElementsByTagName("h2")
    titel[0].style.backgroundColor = 'purple';
    titel[0].style.textDecoration = 'underline';
    titel[0].style.color = 'yellow';
    let gruun = document.querySelectorAll('.green');
    for (let i = 0; i < gruun.length; i++) {
        gruun[i].style.backgroundColor = 'green';

        gruun[i].style.fontStyle = 'italic';
        gruun[i].style.color = ('yellow');
    }


}
function oefening3() {
    document.getElementById('red').style.backgroundColor = 'red';

    let mainn = document.getElementById('main');
    let wegg = document.getElementById('weg');
    mainn.removeChild(wegg);
    let titelke = document.createElement('h1').insertBefore('h1');

}
function oefening4() {
 let boek1= {
     Titel: 'The theory of everything',
     Auteur: 'Stephen Hawking',
     Gelezen: 'ja'
    }
    let boek2 = {
     Titel: '12 rules for life',
        Auteur: 'Jordan Peterson',
    Gelezen: 'nee'}
    let eersteboek = document.createTextNode(boek1.Titel + ' van ' + boek1.Auteur);
 let tweedeboek = document.createTextNode(`${boek2.Titel} van ${boek2.Auteur}` );
 let eerste = document.createElement('li');
    eerste.appendChild(eersteboek);
    let tweede = document.createElement('li');
    tweede.appendChild(tweedeboek);
    document.getElementById('ul').appendChild(eerste);
    document.getElementById('ul').appendChild(tweede);
}