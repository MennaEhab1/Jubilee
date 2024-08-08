const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: true,
    grabCursor:true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //responsiveness

    breakpoints:{
    0: {
            slidesPerView:1
    },
    620: {
        slidesPerView:2
    },
    1024: {
        slidesPerView:3
    },
    }
});
function appear() {
    $("body").css("overflow", "hidden");
    
    setTimeout(() => {
    $(".load").fadeOut();
    $("body").css("overflow", "visible");
    }, 1500);  
}
