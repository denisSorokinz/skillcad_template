// Cache selectors
// let lastId = '_',
//     productsNavigation = $("#productsNavigation"),
//     topMenuHeight = productsNavigation.outerHeight() + 15,
//     // All list items
//     menuItems = productsNavigation.find("a");
// // Anchors corresponding to menu items
// scrollItems = menuItems.map(function () {
//     var item = $($(this).attr("href"));
//     if (item.length) {
//         return item;
//     }
// });
//
//
// // Bind click handler to menu items
// // so we can get a fancy scroll animation
// menuItems.click(function (e) {
//     var href = $(this).attr("href"),
//         offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
//     $('html, body').stop().animate({
//         scrollTop: offsetTop
//     }, 300);
//     e.preventDefault();
// });
//
// // Bind to scroll
// $(window).scroll(function () {
//     // Get container scroll position
//     var fromTop = $(this).scrollTop() + topMenuHeight;
//
//     // Get id of current scroll item
//     var cur = scrollItems.map(function () {
//         if ($(this).offset().top < fromTop)
//             return this;
//     });
//     // Get the id of the current element
//     cur = cur[cur.length - 1];
//     var id = cur && cur.length ? cur[0].id : "";
//
//     if (lastId !== id) {
//         console.log('[1] elem: ', lastId, id);
//         lastId = id;
//             // Set/remove active class
//         menuItems
//             .parent().removeClass("active")
//             .end().filter("[href='#"+id+"']").parent().addClass("active");
//     }
// });


// Cache selectors
var lastId,
    topMenu = $("#productsNavigation"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class

        //
        console.log('[1] elem: ',  menuItems.end()[0]);
        ///

        menuItems.parent().prevObject.removeClass("products-button-pressed");
            // .parent().prevObject.addClass("products-button-pressed") // will Addclass to all elements
        menuItems.end().filter("[href='#"+id+"']").parent().prevObject.addClass("products-button-pressed");
    }
});