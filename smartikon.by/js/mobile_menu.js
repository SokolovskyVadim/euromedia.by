$(function () {

    $(document).on("click", ".mobile_menu_container .parent", function (e) {
        e.preventDefault();
        $(this).siblings("ul").addClass("loaded");
    });

    $(document).on("click", ".mobile_menu_container .back", function (e) {
        e.preventDefault();
        $(this).parent().parent().removeClass("loaded");
    });

    $(document).on("click", ".mobile_menu", function (e) {
        e.preventDefault();
        $(".mobile_menu_container").addClass("loaded");
        $(".mobile_menu_overlay").fadeIn();
    });

    $(document).on("click", ".mobile_menu_overlay", function (e) {
        $(".mobile_menu_container").removeClass("loaded");
        $(this).fadeOut();
    });
});