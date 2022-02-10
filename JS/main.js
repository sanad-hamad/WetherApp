/// <reference path="../typings/globals/jquery/index.d.ts" />
$(document).ready(function () {
  // to test this app you can enter city London ,Tokyo
  // i use this site api https://home.openweathermap.org/users/sign_in

  let APIKey = "43c12fe2d85af69886b5a4f16e32d503";

  let DisplyWether = function (data) {
    console.log(data);

    // destructing object and get the value needed
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    console.log(name, description, icon, temp, humidity, speed);
    // display here
    $("#country").text(`your select city is ${name}`);
    $(".temp").text(`your temp on countery is ${temp} ${icon}`);
    $(".desc").text(`general status: ${description}`);
    $(".wind").text(`wind speed is ${speed}`);
  };

  $("#input").change(function () {
    let city = $("#country").val();

    $.ajax({
      method: "POST",
      url: `https://api.openweathermap.org/data/2.5/weather?q=
       ${city}&appid=${APIKey}`,
      success: function (data, status) {
        DisplyWether(data);
      },
      error: function (xhr, status, errText) {
        $("#error").append(errText);
      },
    });
  });
});
