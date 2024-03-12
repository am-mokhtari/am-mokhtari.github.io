$(document).ready(function () {
    $("#gallery").waypoint(function () {
        $("#gallery").stop();
        $("#gallery").animate({
            opacity: 1
        }, "slow");
    }, {offset: "75%"});

    $("#gallery").waypoint(function () {
        $("#gallery").stop();
        $("#gallery").animate({
            opacity: 0
        }, "fast");
    }, {offset: "100%"});

    $(".gallery_pic").mouseenter(function () {
        $(this.lastElementChild).show();
    });

    $(".gallery_pic").mouseleave(function () {
        $(this.lastElementChild).hide();
    });
});