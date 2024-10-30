'use strict';

secret.addEventListener(
    "click",function () {
        alert("hola");
    }
);

//When the user presses the light on button, 
//replace the image with the other option


lights_on.addEventListener(
    "click",function () {
  document.getElementById("lightbulb").src = "lightbulb_on.webp";
  document.getElementById("lights_on").style.display="none";
  document.getElementById("lights_off").style.display="initial";
  document.body.classList.toggle("light");
  
 
  
    });

lights_off.addEventListener(
    "click",function () {
  document.getElementById("lightbulb").src = "lightbulb_off.webp";
  document.getElementById("lights_off").style.display="none";
  document.getElementById("lights_on").style.display="initial";
  document.body.classList.toggle("light");
  
  
    });
