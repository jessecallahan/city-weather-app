import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import './weatherinterface.js';

$(document).ready(function () {
  $('#solar-form').submit(function (event) {
    event.preventDefault();
    var goal = $('#age').val();
    var output = solar(age);
    output.forEach(function (element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});