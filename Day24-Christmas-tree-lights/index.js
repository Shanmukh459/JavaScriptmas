/**
 * 🎄 Challenge: 
 * 1. The Christmas tree's lights should switch 
 *    on and off every 800 miliseconds.
 * 
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 **/ 
 
const lights = document.getElementsByClassName("lights")
// const blueLights = document.getElementsByClassName("blue")
 
setInterval(function() {
    for(let i = 0; i< lights.length; i++) {
        lights[i].classList.toggle("lights-on")
    } 
}, 800)

 
