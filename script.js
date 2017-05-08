$(document).ready(function() {
    var offset = 220;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.scroll').fadeIn(duration);
        } else {
            $('.scroll').fadeOut(duration);
        }
    });

    $('.scroll').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});

$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

window.sr = new ScrollReveal()
sr.reveal('.tags', { origin: 'bottom', distance: '20px', duration: 2000, })
