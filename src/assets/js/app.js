function sum(a, b) {
    // debugger;
    return a + b;
}

var result = sum(1, 2);
console.log(result);


$(document).on("click", ".form-ddn-placeholder", function () {

    $(this).next('ul').toggleClass("active_list");
});
$(document).on("click", ".brouse-by-category", function () {

    $(".nav-main-dropdowns").toggleClass("active_dropdown");
});

$(document).on("click", ".nav-main-dropdowns--help p a", function () {

    $(".nav-main-dropdowns").removeClass("active_dropdown");
});

$(document).on("click", ".user-icon", function () {

    $(".profile-box").toggleClass("active-profile-box");
});

$(document).on("click", ".profile-close a", function () {

    $(".profile-box").removeClass("active-profile-box");
});

$(document).on("click", ".cart-icon", function () {

    $(".cartList-box").toggleClass("active-cartlist-box");
});

$(document).on("click", ".cart-close a", function () {

    $(".cartList-box").removeClass("active-cartlist-box");
});

$(document).on("click", ".signin-icon", function () {

    $(".signin-form-box").toggleClass("active-signin-box");
});
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
    // $(".main-dropdown-ul li a").removeClass("active")
    // $(this).addClass("active")
    // var url = $(this).data("url");
    // $(".sub-item-dropdown").removeClass("active_sub_tab");
    // $(url).addClass("active_sub_tab");
});
$(document).on("click", ".sub-item-dropdown .close-btn", function () {
    $(".main-dropdown-ul li a").removeClass("active")
    $(".sub-item-dropdown").removeClass("active_sub_tab");
});

$('#banner-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: false,
    dots: true,
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
})
$('#category-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})