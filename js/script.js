$(document).ready(function () {

    // scroll to top function
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function () {
        // first parameter is the property to be animated
        // second if duration in milliseconds
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // mobile menu animate function
    $('.navbar-toggler-icon').click(function () {
        $(this).toggleClass('open');
    });

    // slidedown effect for dropdown menu
    $('.dropdown-toggle').click(function () {
        $('.dropdown-menu').slideToggle();
    });

});
