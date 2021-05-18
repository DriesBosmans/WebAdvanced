document.getElementById('weer').addEventListener('click', getLocatie);

function GetWeatherInfo(position){

    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
        .then(function (response){return response.json()})
        .then (data => {
            console.log(data);
            document.getElementById('weergegevens').innerText = `In Tessenderlo is het nu ${data.main.temp_max} graden buiten. 
            De vochtigheidsgraad is ${data.main.humidity} en de windsnelheid is ${data.wind.speed}.`
        })
        .catch(error => console.log(error))
}

function getLocatie(){
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(GetWeatherInfo);
        console.log(position.coords.longitude);
    }
    else
        {
        alert("Geolocation is not supported by this browser.");
    }
}



document.getElementById('ophalen').addEventListener('click',getRandomUser);

function getRandomUser(){ fetch('https://randomuser.me/api')
    .then(function(response) { return response.json() })
    .then(function(data) { document.getElementById('naam').innerHTML
        = data.results[0].name.first + ' ' + data.results[0].name.last
        document.getElementById('email').innerHTML = data.results[0].email
        document.getElementById('foto').src = data.results[0].picture.large })
    .catch(function(error) { console.log(error) }) }


    //oefening norris
document.getElementById('norris').addEventListener('click',Getnorris);
let norrisArray = [];
function Getnorris()
{
    if (norrisArray.length < 5)
    {

        let temp = Zoeknogeengrapop();
        norrisArray.push(temp);
        ShowUitvoer(norrisArray);
    }
    else {alert("genoeg moppen")}
}

function Zoeknogeengrapop()
{
    let grap = "";

    fetch ('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(function(data){ grap = data.value;
        console.log(grap);

        })
        .catch(error => console.log(error))
    return grap;
}

function ShowUitvoer(norrisArray)
{
    let string = "";
    for(let i = 0; i < norrisArray.length; i++)
    {
        string += `${norrisArray[i]} test <br>`;
    }
    document.getElementById('norriss').innerHTML= string;
}