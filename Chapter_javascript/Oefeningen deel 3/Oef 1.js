
let naam = prompt("geef je naam", "dries");

let getal = prompt("geef getal","buh")

do {
    getal = prompt("getal aub","buh");
}
while (getal<1 || getal>5 )
console.log('het getal is ' +getal)

document.getElementById('TitelNaam').innerHTML = naam;
function tijdberekenen() {
    let nu = new Date(Date.now());
    let datum = new Date("07/30/2021")

    let verschrilintijd = datum.getTime() - nu.getTime();
    return verschrilintijd / (1000 * 3600 * 24);

}
let dagen = tijdberekenen();
document.getElementById('dagen').innerHTML = dagen;

let zin = 'Deze zin is de shit';
let zinner = 'deze niet';
let derde = 'niks';

document.getElementById('zin1').innerHTML = zin;
document.getElementById("zin2").innerText = zinner;
document.getElementById('zin3').innerHTML = derde;

let vierde = zin + ' ' + zinner + ' ' + derde;
document.getElementById('conc').innerText = vierde;

let randomzin = 'ik wil een koekje';
let pos0 = randomzin.charAt(0);
let pos3 = randomzin.charAt(3);
let posk = randomzin.lastIndexOf('k');
let pose = randomzin.length;
console.log(pos0 + ' ' + pos3 + ' ' + posk + ' ' + pose);

randomzin.replace('koekje','lasagne van pxl catering').toUpperCase();
console.log(randomzin);



