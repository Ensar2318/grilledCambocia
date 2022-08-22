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

// Mobil kısımda kart açma ve body yi blocklama
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
// Mobil kısımda kart açma ve body yi blocklama

$(document).scroll(function() {
    if (window.pageYOffset <= 200) {
        $(".mobile-cart").addClass("hide");
    } else {
        $(".mobile-cart").removeClass("hide");

    }
});




const cartnoitem = `<div class="no-item">
<div class="bag-circle"><span class="icon-bag"></span></div>
<p>Wahlen Sie leckere Gerichte <br> aus der Karte.</p>
</div>`;

const carditem = `       <div class="card-item">
<div class="title">
    <div class="text-head">
        <h5>Special Hamburger</h5> <small>Burgerking</small></div>
    <a href="javascript:;">Not Ekle</a>
    <a href="javascript:;">Düzenle</a> <span class="icon-trash"></span>
</div>
<div class="footer">
    <h3><small>€</small> 9.54</h3>
    <div class="counter-single-item">
        <span class="icon-minus"></span>
        <span class="number">1</span>
        <span class="icon-plus"></span>
    </div>
</div>
</div>`;

$(".card-checkout-wrap").on("click", ".icon-trash", function() {
    let cardcount;
    $(".card-checkout-wrap .icon-trash").each(function(index, element) {
        // element == this
        cardcount = index;
    });
    $(this).parent().parent().remove();

    if (cardcount == 0) {
        $(".card-checkout-wrap .card-content").append(cartnoitem);
    }

});

$(".menu-card-wrap .fiat .price").click(function(e) {
    e.preventDefault();
    $(".card-checkout-wrap .card-content .no-item").remove();
    $(".card-checkout-wrap .card-content").append(carditem);


});

$(".menu-card-wrap .menu-add-btn").click(function(e) {
    e.preventDefault();

    if (!$(this).hasClass("detail")) {
        $(".card-checkout-wrap .card-content .no-item").remove();
        $(".card-checkout-wrap .card-content").append(carditem);
    }
    if ($(this).hasClass("active")) {
        if ($(this).hasClass("detail")) {
            $('html,body').animate({
                scrollTop: $(this).offset().top,
            }, 200);
        } else {
            $('html,body').animate({
                scrollTop: $(this).offset().top-100,
            }, 200);
        }
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