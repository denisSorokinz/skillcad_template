window.onscroll = function () {
    myFunction()
};


var body = document.body;
var productsSection = document.getElementById("products-section");
var sticky = productsSection.offsetTop;
let productsNavigation = $("#productsNavigation");
let menuItems = productsNavigation.find("a");
let productsNavigationHeight = productsNavigation.outerHeight() + 15;

// Anchors corresponding to menu items
let scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
        return item;
    }
});

$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};


menuItems.click(function (e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - productsNavigationHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 500);
    e.preventDefault();
});


function myFunction() {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + productsNavigationHeight;
    // Get id of current scroll item
    var cur = scrollItems.filter(function () {
        return ($(this).isInViewport() && ($(this).offset().top < fromTop));
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    let selectedLinkItem = productsSection.querySelector(`a[href='#${id}']`);

    menuItems.removeClass("products-button-pressed");
    if (selectedLinkItem)
        selectedLinkItem.classList.add("products-button-pressed");

    // do sticky menu
    if (window.pageYOffset > sticky) {
        body.classList.add("body-padding");
        productsSection.classList.add("products-section-fixed");
    } else {
        body.classList.remove("body-padding");
        productsSection.classList.remove("products-section-fixed");
    }
}