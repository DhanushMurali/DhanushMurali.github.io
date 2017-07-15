$(document).ready(function () {

    setTimeout(function () {

        /*
        $(".LOAD_SCREEN").animate({
            opacity: 0.0
        }, 1000).css('display', 'none');
*/
        $(".ENTIRE_PAGE, .menu")
            .css('display', 'block')
            .animate({
                opacity: 1.0
            }, 1000);
    }, 1000);

    //1.Smooth scroll
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 1000);
        return false;
    });




});
