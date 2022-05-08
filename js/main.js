jQuery(document).ready(function($) {
    $('[data-toggle="tooltip"]').tooltip();

    /* General Navigation*/
    
    //open/close primary navigation
    $('.primary-nav-trigger').on('click', function(event){
        event.stopPropagation();
        $('.menu-icon').toggleClass('is-clicked');
        $('header[role="banner"]').toggleClass('menu-is-open');
        $('body').toggleClass('is-active');
        $('body').toggleClass('scroll_lock');
    });

    var hideOverlayBtn = $('.overlayToggle');

    hideOverlayBtn.on('click', function(e) {
        e.preventDefault();
        $(this).parents(".widgetMediaHolder").removeClass("has_overlay");
    });
    
});
