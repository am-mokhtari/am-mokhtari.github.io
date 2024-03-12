$(document).ready(function () {
    $("#progress-bar").stop();
    $(".slide").stop();

    setTimeout(function () {
        $("#intro-logo").slideDown(700);
    }, 200);

    setTimeout(function () {
        $("#intro").animate({
            opacity: "0"
        }, 300);
    }, 1300);

    setTimeout(function () {
        $("#intro").remove();
    }, 2000);
});