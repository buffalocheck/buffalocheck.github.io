$(document).ready(function() {
    $(".button-collapse").sideNav({
        closeOnClick: true

    });
    $(".scrollspy").scrollspy();

    // $(".materialboxed").materialbox();
    $('.button-collapse').sideNav('hide');
    $('.button-collapse').sideNav('destroy');


    // $('a').on('click', function(event) {
    //     event.preventDefault();
    //     var target = $(this.hash);
    //     $('html, body').animate({
    //         scrollTop: target.offset().top
    //     }, 1200);
    //     return false;

    });



});
