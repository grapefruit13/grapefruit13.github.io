function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = "ae5e48391f3bdedca9e95dca447c1a71";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log("you live it", lat, lon, url);
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = `location: ${data.name}`;
      weather.innerText = `weather: ${data.weather[0].main} ${data.main.temp}° /`;
    })
  );
}

function onGeoError() {
  alert("can't find you. No weather for u");
}
const lo = navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
