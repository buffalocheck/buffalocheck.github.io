$(document).ready(function() {
    $(".button-collapse").sideNav({
        closeOnClick: true,
        menuWidth: 150,
        draggable: true

    });
    $(".scrollspy").scrollspy();

    // $(".materialboxed").materialbox();
    $('.button-collapse').sideNav('hide');
    $('.button-collapse').sideNav('destroy');


});
