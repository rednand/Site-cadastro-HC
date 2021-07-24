$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass:true,
    responsive:{
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    },
    autoplay: true,
    autoplayTimeout: 2000,
})

