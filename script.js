$( document ).ready(function() {


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position)
      $(".city-name").html("San Francisco");
      $(".city-temperature").html("66 °");
      $(".temp-icon").html(clouds);

    });
  }



});



let clouds ="<div id='clouds'> <div class='cloud x1'></div><div class='cloud x2'></div><div class='cloud x3'></div><div class='cloud x4'></div><div class='cloud x5'></div></div>"
