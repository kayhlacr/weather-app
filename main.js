document
  .getElementById("weatherForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("loading").style.display = "block";

    let userLocation = document.getElementById("location").value;

    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=f54d21c86965472bbe844940243101&q=${userLocation}&days=5&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("loading").style.display = "none";

        document.getElementById("maxTempDisplay").innerHTML = "";

        for (let i = 0; i < data.forecast.forecastday.length; i++) {
          let temp = document.createElement("h2");

          let date = new Date(data.forecast.forecastday[i].date);

          temp.textContent = `${date.toDateString()}: Max ${
            data.forecast.forecastday[i].day.maxtemp_f
          }°F, Min ${data.forecast.forecastday[i].day.mintemp_f}°F`;

          document.getElementById("maxTempDisplay").appendChild(temp);
        }
      })
      .catch((error) => {
        document.getElementById("loading").style.display = "none";
        console.error("Error:", error);
      });
  });
