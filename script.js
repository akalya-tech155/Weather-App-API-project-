function getWeather() {
    console.log("Weather function");
}




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
}