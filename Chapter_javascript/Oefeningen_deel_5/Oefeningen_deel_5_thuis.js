document.getElementById('knopke').addEventListener('click',TekstKopieren);
document.getElementById('rood').addEventListener('click', TekstRood);

function TekstKopieren()
{
    let tekst = document.getElementById('invoer').value;
    document.getElementById('paraf').innerText = tekst;

    let nieuweparagraaf = document.createElement('p');
    nieuweparagraaf.innerText = tekst;
    document.getElementsByClassName('oef1')[0].appendChild(nieuweparagraaf)

}
let deestring = "";
function TekstRood()
{
let oudetekst = document.getElementById('span').value;
let paragraaf = document.getElementById('paraf');
let nieuwetekst = document.getElementById('tekst').value;
deestring += `${oudetekst} <br>`;
document.getElementById('span').innerText = nieuwetekst;
paragraaf.innerText += `${oudetekst} \n`;
document.getElementById('span').style.color ='red';


}

document.querySelector('#groter').addEventListener('click', maakgroter);
document.querySelector('#kleiner').addEventListener('click', maakkleiner);

function maakgroter()
{
    document.getElementById('leegte').style.fontSize = '48px';
}
function maakkleiner()
{
    document.querySelector('#leegte').style.fontSize ='12px';
}