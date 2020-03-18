import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { WeatherService } from './../src/weather-service.js';

$(document).ready(function () {

    $('#weatherLocation').click(function () {
        const city = $('#location').val();
        $('#location').val("");

        (async () => {
            let weatherService = new WeatherService();
            const response = await weatherService.getWeatherByCity(city);
            getElements(response);
        })();

        function getElements(response) {
            if (response) {
                $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
                $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
            } else {
                $('.showHumidity').text(`There was an error handling your request.`);
                $('.showTemp').text(`Please check your inputs and try again!`);
            }
        }

    });
});