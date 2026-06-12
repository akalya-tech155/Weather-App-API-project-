function getWeather() {
    console.log("Weather function");
}


//IMPROVE JAVASCRIPT CODE

function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city");
        return;
    }

    console.log(city);
}