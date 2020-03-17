import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

$(document).ready(function () {
    $('#weatherLocation').click(function () {
        const city = $('#location').val();
        $('#location').val("");

        asyncApiCall();

        async function asyncApiCall() {
            try {
                let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
                let jsonifiedResponse;
                if (response.ok && response.status == 200) {
                    jsonifiedResponse = await response.json();
                } else {
                    jsonifiedResponse = false;
                }
                getElements(jsonifiedResponse);
            } catch {
                getElements(false);
            }
        }

        const getElements = function (response) {
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
