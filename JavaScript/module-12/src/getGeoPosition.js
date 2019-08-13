import {
  fetchWeather
} from './fetchWeather.js';
import PNotify from 'pnotify/dist/es/PNotify';

PNotify.defaults.delay = 1500;

const getCurrentPositions = () => {
  const options = {
    maximumAge: 1000 * 60 * 30
  };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

let latitude;
let longitude;


getCurrentPositions()
  .then(location => {
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;

    locationKnown();

  })
  .catch(error => {
    PNotify.error(
      "Geolocation has failed. Please use manual search of your city"
    );
  })

function locationKnown() {
  const coords = `${latitude},${longitude}`;

  fetchWeather(coords).then((data) => {
    document.querySelector('.icon').src = data.current.condition.icon;
    document.querySelector('[data-field="location"]').textContent = data.location.name;
    document.querySelector('[data-field="temp"]').textContent = data.current.feelslike_c + '°C';
    document.querySelector('[data-field="humidity"]').textContent = data.current.humidity + '%';
    document.querySelector('[data-field="wind"]').textContent = data.current.wind_kph + 'kph';
    document.querySelector('[data-field="conditions"]').textContent = data.current.condition.text;
  })
}

// ==== INPUT



let city;
const cityInput = document.querySelector('[name="city"]');
const form = document.querySelector('#search-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  city = cityInput.value;
  locationOnSubmit()
});

function locationOnSubmit() {
  fetchWeather(city)
  .then((data) => {
    document.querySelector('.icon').src = data.current.condition.icon;
    document.querySelector('[data-field="location"]').textContent = data.location.name;
    document.querySelector('[data-field="temp"]').textContent = data.current.feelslike_c + '°C';
    document.querySelector('[data-field="humidity"]').textContent = data.current.humidity + '%';
    document.querySelector('[data-field="wind"]').textContent = data.current.wind_kph + 'kph';
    document.querySelector('[data-field="conditions"]').textContent = data.current.condition.text;
  })
  .catch(err => PNotify.error("Вы ввели крокозябрики!"))
}
