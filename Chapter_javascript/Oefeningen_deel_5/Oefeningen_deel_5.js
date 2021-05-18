document.getElementById('submit').addEventListener("click", Vulparagraaf);
document.getElementById('groter').addEventListener('click', Maaktekstgroter)
document.getElementById('kleiner').addEventListener('click',Maaktabel);
function Vulparagraaf()
{
    let inhoud = document.getElementById('tekst').
    console.log(inhoud);
   document.getElementById('leegte').innerText = document.getElementById('titel').innerText;

   MaakNieuweParagraaf();
}

function MaakNieuweParagraaf()
{
    let nieuweparagraaf = document.createElement('p');
    nieuweparagraaf.id = 'twee';

    document.getElementsByTagName('body')[0].appendChild(nieuweparagraaf);
    document.getElementById('twee').innerText = document.getElementById('titel').innerText;
}
let tekstgrootte = 15;
function Maaktekstgroter()
{

    tekstgrootte++;
    document.getElementById('leegte').style.fontsize = '25px';
    document.getElementById('leegte').innerText = 'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren \'60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.';

}

function Maaktabel()
{
    let tabel = document.createElement('table');
    document.getElementsByTagName('body')[0].appendChild(tabel);
    let rij = document.createElement('tr');
    document.getElementsByTagName('table')[0].appendChild(rij);
    rij.style.border = 'solid 2px black';
    tabel.style.margin = '40px';
    for ( let i = 0; i < 24; i++)
    {
        let content = i;
        let cel = document.createElement('td');
        document.getElementsByTagName('tr')[0].appendChild(cel);
        cel.innerText = i.toString();
        cel.style.border = 'solid 1px black';
        cel.id = `cel${i}`;
    }


}

function Hide(evt)
{
    evt.target.style.visibility = 'hidden';
}
cel[evt].addEventListener('click', Hide, false);