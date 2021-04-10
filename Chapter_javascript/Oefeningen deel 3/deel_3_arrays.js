let opleidingen = ArrayOpleidingen();

function ArrayOpleidingen() {
    let opleidingen = ["Programmeren", "nog een", "Digitale vormgeving", "Elektronica-ict", "toegepaste informatica"];
    console.log('het aantal items in de arrayopleidingen = ' + opleidingen.length);
    opleidingen.push("Bachelor multimedia")
return opleidingen;
}
console.log("De arrayOpleidingen bestaat uit " + ArrayOpleidingen().length + " onderdelen");
console.log(ArrayOpleidingen());
let stringopleidingen = opleidingen.join(" - ");
console.log(stringopleidingen);
document.getElementById('test').innerHTML = stringopleidingen;

function Hondenrassen()
{
    let randomgetal;
    do{randomgetal = parseInt(prompt('Geef een random getal'))} //do while werkt niet
    while(randomgetal<0 )
    if()
    {
        alert("katten");
    }
    let hondenrasarray = ['chihuahua','bernersenner','heidewachtel','poedel','labrador','bordercollie','beagle','mechelse herder','golden retriever','duitse herder'];
    let hondenstring = hondenrasarray[randomgetal-1];
    document.getElementById('test').innerHTML = hondenstring;
    return hondenrasarray;
}
let hondenrassen = Hondenrassen();

//oef 5

hondenrassen = hondenrassen.unshift("1","2","3","4","5")
console.log(hondenrassen);

//oef 6

hondenrassen = hondenrassen.pop();
hondenrassen = hondenrassen.shift();
console.log(hondenrassen);

//oef 7
let arr = ["1","2","3","4","5"];
arr.splice(1,2,'19','20');
console.log(arr);




//oef8
function Dagen()
{
  let dagenPerMaand = [30,28,31,30,31,30,31,30,31,30,31,31];
  for(let i = 0; i<dagenPerMaand.length; i++)
{
    for(let j=1;j<=dagenPerMaand[i]; j++)
    {
        console.log(`${j}/${i+1}/2021`);
    }
}

}

function oef9()
{
    let dagenPerMaand = [30,28,31,30,31,30,31,30,31,30,31,31];
    let dagenVanDeWeek = ['zo','ma','di','wo','do','vr','za'];
    let datum = new Date();
    let dag;
    let maand = datum.getMonth();
    let jaar = datum.getFullYear();

    let dagNaam = dagenVanDeWeek[datum.getDay()]
    for (let i = 1; i<=dagenPerMaand[datum.getMonth()];i++)
    {
        dagNaam = dagenVanDeWeek[datum.getDay()]
    }
}