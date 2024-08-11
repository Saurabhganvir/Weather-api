const input = document.getElementById('search-input');
const button = document.getElementById('search-button');

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');
const yourLotn = document.getElementById('locationButton');
const yourTime = document.getElementById('time');
const stopButton = document.getElementById('stop-btn');

async function getData (city){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=4c7c3c2d16fb4bd890f210133242907&q=${city}&aqi=yes
`);
return await promise.json();
}


button.addEventListener('click', async ()=>{
    // const value = input.value;
    const result = await getData(input.value);
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    cityTime.innerText= `${result.location.localtime}`;
    cityTemp.innerText = `${result.current.temp_c}`;
    console.log(result);
});

function gotLocation (position) {
    console.log(position);
}

function failedToGet(){
    console.log('failed to get location');
}

yourLotn.addEventListener('click', async ()=>{
    navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
})

function showTime (){
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    yourTime.innerText = time;
}

let interval = setInterval(showTime, 1000);

stopButton.addEventListener('click', ()=>{
    clearInterval(interval);
})


function adder(num){

    function add(b){
        console.log(num + b);
    }
    return add;
}
const addTo4 = adder(4);
addTo4(7);
addTo4(4);
// http://api.weatherapi.com/v1/current.json?key=4c7c3c2d16fb4bd890f210133242907&q=London&aqi=yes
