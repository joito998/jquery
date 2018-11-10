// The Story
// The website for the “Old San Juan Music Festival” is already designed, but our client wants to add interactivity.Use your JavaScript and jQuery skills to make the website feel more alive.At the end of this exercise you will have completed the following objectives:
// What you'll be building







// When the user mouse enters the “date h3” or “concert - title span” divs in the header section, we want to change the textcolor to “#f1c40f” and remove it when the mouse leaves the area.Alternatively you can reach the same result using the hover effect in jQuery
// Create a function named ticketSale that is executed when the user clicks the Buy Tickets button.This function must prompt the user to enter his name, email and ticket quantity.Then render those values to the website with an onboarding message using the paragraphs with the corresponding IDs.
// Make sure the user adds values for name, email and ticket quantity.If the user doesn't add all of these values don't render de onboarding message.
// The lineup section contains three boxes.Each box contains a data attribute that makes reference to a CSS class.
// When a box is clicked extract the class name from the data attribute.Use this class name to target the DOM element that contains it.
// One click - Display the corresponding section with a slideDown effect.
// Two clicks - Hide the corresponding section with a slideUp effect.


$(".event-image").fadeIn(function () {
});
$(".buy").fadeIn(function () {
});



//cambio de color en date area del header
let originalColor = "#ffffff";
$("#date h3").mouseleave(function () {
    $(this).css("color", originalColor);
    console.log('the div was pressed!');
});

$("#date h3 ").mouseenter(function () {
    originalColor = $(this).css("color");
    $(this).css("color", "#f1c40f");
    console.log('the div was hover overed!');
});

//cambio de color letras en concert title
$("#concert-title").mouseleave(function () {
    $(this).css("color", originalColor);
    console.log('the div was pressed!');
});

$("#concert-title").mouseenter(function () {
    originalColor = $(this).css("color");
    $(this).css("color", "#f1c40f");
    console.log('the div was hover overed!');
});

//funcion de ticket sale

function ticketSale() {
    let name = prompt("Whats is your name?");
    let email = prompt("What is your email?");
    let ticketQty = prompt("How many tickets you want");

    if (name !== "" || email !== "" || ticketQty !== "") {
        $("#name").html(name);
        $("#email").html(email);
        $("#quantity").html(ticketQty);
        $(".buy h2").html("Congrats! Order Placed!'");

    }



}


$(".buy").click(ticketSale);

$(".daily-lineup").click(function () {
    let dataPictures = $(this).attr("data-pictures");
    $("." + dataPictures).slideDown();
})

$(".daily-lineup").dblclick(function () {
    let dataPictures = $(this).attr("data-pictures");
    $("." + dataPictures).slideUp();
})
