///**
// * Created by Radu on 22/02/2015.
// */
//
//var greeting = "Wazzap "
//var name = prompt ("What's your name? ");
//var greetingMessage = greeting + name;
//alert (greetingMessage);

jQuery ("#greeting-form").on("submit", function (eventDetails)
{
    var greeting = "Hello ";
    var name = this.fullName.value;
    var greetingMessage = greeting +name;
    jQuery("#greeting-form").hide([10]);
    jQuery("#greeting").hide().append("<p>" + greetingMessage + "</p>").fadeIn(1000);
    eventDetails.preventDefault();

});

jQuery ("#booking-form").on("submit", function (eventDetails)
{

    var booking = "Thank you ";
    var name = this.fullName.value;
    var bookingMessage = booking + name;
    jQuery("#booking").append("<p>" + bookingMessage + "</p>");
    //alert("h");
    eventDetails.preventDefault();
});