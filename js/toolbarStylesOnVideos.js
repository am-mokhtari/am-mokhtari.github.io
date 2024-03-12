$(document).ready(function () {
    const toolbar = $("#toolbar");
    toolbar.removeClass("bg-white/65");
    toolbar.removeClass("backdrop-blur-md");
    toolbar.addClass("bg-black/20");

    const toolbar_li = toolbar.find("li");
    toolbar_li.removeClass("text-black");
    toolbar_li.addClass("text-white");

    const toggleMenu_p = $("#toggle-menu").find("p");
    toggleMenu_p.removeClass("text-cyan-800");
    toggleMenu_p.addClass("text-white");

    $("#toggle-btn").children("svg").addClass("stroke-white");
});