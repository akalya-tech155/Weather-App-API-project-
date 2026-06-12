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



async function getWeather() {

    const city = document.getElementById("city").value;

    const url =
      `https://wttr.in/${city}?format=j1`;

    const response = await fetch(url);

    const data = await response.json();

    document.getElementById("weather").innerHTML =
      `
      <h2>${city}</h2>
      <p>Temperature: ${data.current_condition[0].temp_C} °C</p>
      `;

}}

document.getElementById("weather").innerHTML =
    "Loading...";


async function getWeather() {

    try {

        const city = document.getElementById("city").value;

        const response =
            await fetch(`https://wttr.in/${city}?format=j1`);

        const data = await response.json();

        document.getElementById("weather").innerHTML =
            `Temperature: ${data.current_condition[0].temp_C} °C`;

    } catch (error) {

        document.getElementById("weather").innerHTML =
            "Failed to load weather data";

    }
}

