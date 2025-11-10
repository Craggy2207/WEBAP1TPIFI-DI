/*
//VANILLA JS version
function changeH1() {
document.getElementById("myMessage").innerHTML = "Hello World from JavaScript";
}
addEventListener("load", changeH1);
*/

//JQUERY version¨)


/*function start() {
    $("#myMessage").on("click", changeH1);
}
function changeH1() {
    //instead of changing the #myMessage I would like to READ its contents and display those an alert message
    alert( $("#myMessage").html() );
    //$("#myMessage").html("Hello World from jQuery");
}*/
/*function counting() {
    $("button:nth-of-type(1)").on("click", increase);
    $("button:nth-of-type(2)").on("click", decrease);
}   
function increase() {
    var addition = $(".counter").html();
    $(".counter").html(parseInt(addition) + 1);
}
function decrease() {
    var addition = $(".counter").html();
    $(".counter").html(parseInt(addition) - 1);
}*/
$(add);
function add() {
$("button").on("click", addition);
}
function addition() {
    var a = parseInt($("#NumberA").val());
    var b = parseInt($("#NumberB").val());
    var result = a + b;
    $("#Result").html("The result is: " + result);
}