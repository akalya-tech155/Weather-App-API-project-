function getWeather() {
    console.log("Weather function");
}



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