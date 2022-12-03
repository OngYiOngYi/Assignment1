// Set the date we're counting down to
var countDownDate1 = new Date("Dec 17, 2022 13:00:00").getTime();

// Update the count down every 1 second
var x1 = setInterval(function() {

// Get today's date and time
var now1 = new Date().getTime();
    
// Find the distance between now and the count down date
var distance1 = countDownDate1 - now1;
    
// Time calculations for days, hours, minutes and seconds
var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
    
// Output the result in an element with id="demo"
document.getElementById("demo").innerHTML = days1 + "d " + hours1 + "h "
+ minutes1 + "m " + seconds1 + "s ";
    
// If the count down is over, write some text 
if (distance1 < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
}
}, 1000);