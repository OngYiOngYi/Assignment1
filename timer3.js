// Set the date we're counting down to
var countDownDate3 = new Date("Feb 12, 2023 07:00:00").getTime();

// Update the count down every 1 second
var x3 = setInterval(function() {

    // Get today's date and time
    var now3 = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance3 = countDownDate3 - now3;
        
    // Time calculations for days, hours, minutes and seconds
    var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
    var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="timer3"
    document.getElementById("timer3").innerHTML = days3 + "d " + hours3 + "h "
    + minutes3 + "m " + seconds3 + "s ";
        
    // If the count down is over, write "EXPIRED"
    if (distance3 < 0) {
        clearInterval(x);
        document.getElementById("timer3").innerHTML = "EXPIRED";
    }
}, 1000);