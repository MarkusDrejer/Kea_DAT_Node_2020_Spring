//1-5//
$("body").css('text-align', 'center');
$("#title h2").text("New Title");
$(".subtitle-box").css('background-color', 'blue');
$('.subtitle-box .temp').toggle();
$("div.reason").css('border', 'dotted blue 5px');

//6-8//
$("#first-list li").css('font-weight', 'bold');
$("#first-list li:last-child").css('text-decoration', 'underline');
$("#first-list li:nth-child(2)").css('text-decoration', 'line-through');

//9-10//
$(".second-list").css('font-style', 'italic');
$("span").css('font-size', '0.5em');

//11-15//
$(".unused-box label:first").remove();
$(".unused-box").append("<p>Second Sentence</p>");
$(".unused-box").prepend("<p>First Sentence</p>");
$(".unused-box").attr("class", "used-box");

// Good practice when adding proper jQuery like eventhandler stuff
$(document).ready(() => {

$(".used-box").click(function () {
    $(this).toggleClass("used-boxed-clicked");
});

//16
$("#submit-button").mouseenter(() => {
    $(event.currentTarget).text("You're ready to click.");
}).mouseout(() => {
    $(event.currentTarget).text("Click.");
});
//17

$("#submit-button").click(function () {
    var i = $("#first-list li").length + 1;
    $("#first-list").append("<li>Reason " + i + "</li>");
    //18
    console.log($(this).parent());
});

});