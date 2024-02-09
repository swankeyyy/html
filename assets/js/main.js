$(document).ready(function () {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();

        }
    });

    $('#top').click(function() {
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    });

    $(".owl-carousel-full").owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
            
        }
    });
});


