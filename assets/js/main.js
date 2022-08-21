// Header ve footer load işlemi
$(document).ready(function() {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});

// Menu item detail open js
$(".menu-add-btn").click(function(e) {
    e.preventDefault();

    var height = $(this).parent().parent().children(".detail-wrap").prop("scrollHeight");
    if ($(this).hasClass("active")) {
        $(this).parent().parent().children(".detail-wrap").css("max-height", 0);
    } else {
        $(this).parent().parent().children(".detail-wrap").css("max-height", height);
    }
    $(this).toggleClass("active");

});
// Menu item detail open js

// navbar link active js
$(window).scroll(function() {
    let current = "";
    $(".banner-wrap").each(function(index, element) {
        // element == this
        const bannerTop = element.offsetTop;
        if (pageYOffset >= bannerTop + 300) {
            current = element.getAttribute("id");
        }
        $(".nav-link").each(function(index, element) {
            // element == this

            if ($(element).attr("href").split("#")[1] == current) {
                $(element).addClass("active");
            } else {
                $(element).removeClass("active");
            }
        });

    });
});
// navbar link active js


// only mobile work swiper
var init = false;

function swiperCard() {
    if (window.innerWidth <= 768) {
        if (!init) {
            init = true;
            swiper = new Swiper(".navbarSwiper", {
                slidesPerView: 3,
                spaceBetween: 10,
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard);
// only mobile work swiper

// Mobil kısımda kart açma
$(".mobile-cart").click(function(e) {
    e.preventDefault();
    $(".mobile-card-checkout").addClass("active");
    $("body").addClass("mobile-block");
});
$(".card-checkout-wrap .close-btn").click(function(e) {
    e.preventDefault();
    $(".mobile-card-checkout").removeClass("active");
    $("body").removeClass("mobile-block");
});
// Mobil kısımda kart açma

$(document).scroll(function() {
    if (window.pageYOffset <= 100) {
        $(".mobile-cart").slideUp();
    } else {
        $(".mobile-cart").slideDown();

    }
});


//#####Swiper Örneği######

// var announcementSwiper = new Swiper(".announcementSwiper", {
//     slidesPerView: 3,
//     spaceBetween: 20,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     centeredSlides: true,
//     breakpoints: {

//         768: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//         },
//         1024: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//         },
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".announcementSwiper-button-next",
//         prevEl: ".announcementSwiper-button-prev",
//     },
// });