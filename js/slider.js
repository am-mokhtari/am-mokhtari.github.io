$(document).ready(function () {
    var child_number = 1;
    var child_count = $(".slide").length;
    var slide_time = 5000;
    var call = 0;
    $(".slide:not(:nth-child(" + child_number + "))").hide();
    setTimeout(sliding, 2000, ++call);

    $('#prev-btn').click(function () {
        changeSlide("prev");
    });

    $('#next-btn').click(function () {
        changeSlide("next");
    });

    function sliding(number) {
        $("#progress-bar").animate({
            width: "100%",
        }, slide_time);

        setTimeout(function () {
            // console.log(call, number);
            if (call === number) {
                $("#progress-bar").css({
                    width: "0%",
                });
                changeSlide("next");
            }
        }, slide_time);
    }

    function changeSlide(type) {
        $("#progress-bar").css("width", "0");
        $("#progress-bar").stop();

        if (type === "prev") {
            $(".slide:nth-child(" + (child_number) + ")").slideToggle("slow");

            if (child_number === 1) {
                child_number = child_count + 1;
            }
            $(".slide:nth-child(" + (--child_number) + ")").slideToggle("slow");

        } else {
            $(".slide:nth-child(" + (child_number) + ")").fadeOut("slow");

            if (child_number === child_count) {
                child_number = 0;
            }
            $(".slide:nth-child(" + (++child_number) + ")").fadeIn("slow");
        }

        sliding(++call);
    }
});
