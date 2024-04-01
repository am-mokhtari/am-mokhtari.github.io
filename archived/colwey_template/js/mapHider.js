$(document).ready(function () {
    $("#mapBox").mouseenter(function () {
        $("#mapHider").show();
    });
    $("#mapBox").mouseleave(function () {
        $("#mapHider").hide();
    });
});