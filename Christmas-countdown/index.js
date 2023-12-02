const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    // const christmas = 25
    const countDownDate = new Date("Dec 25, 2023 16:37:52").getTime();
    const date = new Date()
    
    const now = new Date().getTime();
    let timeleft = countDownDate - now;
    
    let myfunc = setInterval(function() {
        let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
        countdownDisplay.innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
        
        if (timeleft < 0) {
        countdownDisplay.innerHTML = "Merry Christmas🎅🎄!!";
        }
    }, 1000)
        
    console.log(date)
}
 
renderCountdown()
