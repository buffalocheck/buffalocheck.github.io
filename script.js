$(document).ready(function() {
    $(".button-collapse").sideNav({
        closeOnClick: true,
        menuWidth: 150,
        draggable: true

    });

    // $(".materialboxed").materialbox();
    $('.button-collapse').sideNav('hide');
    $('.button-collapse').sideNav('destroy');

    // smooth-scroll
    $('a').on('click', function(event) {
        event.preventDefault();
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 300);
        return false;
    });

});
