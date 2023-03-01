$(document).ready(function () {
    $('#hamburger-menu-icon').click(function () {
        $(this).toggleClass('open');
    });
});
// Nav form All category dropdown
$(document).on("click", ".form-ddn-placeholder", function () {

    $(this).next('ul').toggleClass("active_list");
});
$(document).on("click", ".form-ddn-list li", function () {
    // allOptions.removeClass('selected');
    $(this).addClass('selected');
    $(".form-ddn-placeholder span:not(.ddn-indicator)").html($(this).html());
    // allOptions.toggle();
    $(".form-ddn-list").removeClass("active_list");
});
// ends
// Nav brouse by category  dropdown
$(document).on("click", ".brouse-by-category", function () {

    $(".nav-main-dropdowns").toggleClass("active_dropdown");
});
// Nav brouse by category  dropdown close
$(document).on("click", ".nav-main-dropdowns--help p a", function () {

    $(".nav-main-dropdowns").removeClass("active_dropdown");
});
// Nav prodile dropdown
$(document).on("click", ".user-icon", function () {

    $(".profile-box").toggleClass("active-profile-box");
});
// Nav prodile dropdown close
$(document).on("click", ".profile-close a", function () {

    $(".profile-box").removeClass("active-profile-box");
});
// Nav Cart dropdown
$(document).on("click", ".cart-icon", function () {

    $(".cartList-box").toggleClass("active-cartlist-box");
});
// Nav Cart dropdown close
$(document).on("click", ".cart-close a", function () {

    $(".cartList-box").removeClass("active-cartlist-box");
});
// Nav Sign in dropdown
// $(document).on("click", ".signin-icon", function () {

//     $(".signin-form-box").toggleClass("active-signin-box");
// });

// Sub dropdown open
$(document).on("click", ".main-dropdown-ul li a", function () {
    var url = $(this).data("url");
    if ($(this).hasClass("active")) {
        $(this).removeClass("active")
        $(".main-dropdown-ul li a").removeClass("active");
    } else {
        $(".main-dropdown-ul li a").removeClass("active");
        $(this).addClass("active");
    }


    if ($(url).hasClass("active_sub_tab")) {
        $(url).removeClass("active_sub_tab")
        $(".sub-item-dropdown").removeClass("active_sub_tab");
    } else {
        $(".sub-item-dropdown").removeClass("active_sub_tab");
        $(url).addClass("active_sub_tab");
    }
});
// Sub dropdown close
$(document).on("click", ".sub-item-dropdown .close-btn", function () {
    $(".main-dropdown-ul li a").removeClass("active")
    $(".sub-item-dropdown").removeClass("active_sub_tab");
});

// Banner carousel
$('#banner-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8000,
    smartSpeed: 800,
    dotsSpeed: 800,
    dragSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

// Category carousel
$('#category-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    dots: false,
    autoplayTimeout: 6500,
    smartSpeed: 800,
    dotsSpeed: 800,
    dragSpeed: 800,
    navSpeed: 800,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none"><path d="M18.25 34.5L1.75 18L18.25 1.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> ', ' <svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none"><path d="M1.75 34.5L18.25 18L1.75 1.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> '],
    responsive: {
        0: {
            items: 1,
            dots: true,
            nav: false
        },
        500: {
            items: 2,
            margin: 10,
            dots: true,
            smartSpeed: 1000,
            nav: false
        },
        600: {
            items: 3,
            margin: 10,
            dots: true,
            smartSpeed: 1000,
            nav: false
        },
        1000: {
            items: 4,
            margin: 0
        },
        1240: {
            items: 4
        }
    }
});

// Deal of the day carousel
$('#deal-of-the-day-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    dots: false,
    autoplayTimeout: 6500,
    smartSpeed: 800,
    dotsSpeed: 800,
    dragSpeed: 800,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none"><path d="M18.25 34.5L1.75 18L18.25 1.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> ', ' <svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none"><path d="M1.75 34.5L18.25 18L1.75 1.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> '],
    responsive: {
        0: {
            items: 2,
            margin: 0,
            dots: true,
            nav: false
        },
        500: {
            items: 2,
            margin: 10,
            dots: true,
            smartSpeed: 1000,
            nav: false
        },
        600: {
            items: 2,
            margin: 10,
            dots: true,
            smartSpeed: 1000,
            nav: false
        },
        1000: {
            items: 3,
            margin: 10
        },
        1200: {
            items: 3
        }
    }
})

// Product filter carousel
$('.product-category-tabs-carousel').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    autoplay: false,
    dots: false,
    autoplayTimeout: 2000,
    smartSpeed: 800,
    dotsSpeed: 800,
    dragSpeed: 800,
    // autoWidth: true,
    // navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none"><path d="M18.25 34.5L1.75 18L18.25 1.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> ', ' <svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none"><path d="M1.75 34.5L18.25 18L1.75 1.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> '],
    responsive: {
        0: {
            items: 1,
            margin: 20,
            nav: false
        },
        600: {
            items: 2,
            margin: 20
        },
        1000: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
})

// Product filter carousel
$('#best-deal-tabs-carousels').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    autoplay: false,
    dots: false,
    autoplayTimeout: 2000,
    smartSpeed: 800,
    dotsSpeed: 800,
    dragSpeed: 800,
    // autoWidth: true,
    // navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none"><path d="M18.25 34.5L1.75 18L18.25 1.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> ', ' <svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none"><path d="M1.75 34.5L18.25 18L1.75 1.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> '],
    responsive: {
        0: {
            items: 1,
            margin: 20,
            nav: false
        },
        600: {
            items: 2,
            margin: 20
        },
        1000: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
})
// New arrival countdown
$(document).ready(function () {

    function makeTimer() {
        var arrivalEnds = new Date("5 march 2023 9:56:00 GMT+01:00");
        arrivalEnds = (Date.parse(arrivalEnds) / 1000);
        var now = new Date();
        now = (Date.parse(now) / 1000);
        var timeLeft = arrivalEnds - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (days < "10") { days = "0" + days; }
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        $("#days").html(days);
        $("#hours").html(hours);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);

    }

    setInterval(function () { makeTimer(); }, 1000);
});
// Brouse by category  Mobile drop down
$(document).on("click", ".brouse_by_category", function () {

    $(".nav-dropdown-set1").toggleClass("active");
});
$(document).on("click", ".hamburger-menu-mob", function () {

    $(".mobile-nav").toggleClass("active");
});

$(document).on("click", ".nav-dropdown-set1 li a", function () {
    var url = $(this).data("url");
    if ($(url).hasClass("active_sub_tab")) {
        $(url).removeClass("active_sub_tab")
        $(".sub-item-dropdown").removeClass("active_sub_tab");
    } else {
        $(".sub-item-dropdown").removeClass("active_sub_tab");
        $(url).addClass("active_sub_tab");
        $(".nav-main-dropdowns ").css({ "overflow": "visible", "opacity": "1" })
    }
});
$('.owl-carousel').each(function () {
    $(this).find('.owl-dot').each(function (index) {
        $(this).attr('aria-label', index + 1);
    });
    $(this).find('.owl-nav button').each(function (index) {
        $(this).attr('aria-label', index + 1);
    });
});

$(document).ready(function () {
    var dealstab = null;
    var productsstab = null;
    $(document).ready(function () {
        $('#dealstab').scrollTabs();
        $('#productsstab').scrollTabs();
    });
});