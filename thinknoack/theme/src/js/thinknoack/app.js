// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
    var x = 2
});

$(function() {

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // intro animation
    $('.intro .container').addClass('animated fadeInUpBig visibleAn').removeClass('hideAn');

    $('#contact .bio').waypoint(function() {
        $('#contact .bio').addClass('animated flipInX visibleAn').removeClass('hideAn');
    },{offset: '78%'});

    //post affix
    $('.post-img').waypoint(function() {
        $('.scrollFix').toggleClass('scrollFixTop');
    },{offset: '5px'});

    $('.post-img').waypoint(function() {
        $('.scrollFix').toggleClass('scrollFixBottom');
    },{offset: '-90%'});

    // skills
    $('#html-chart').waypoint(function() {
        $('#html-chart').css('width', '92%');
    },{offset: '88%'});
    $('#css-chart').waypoint(function() {
        $('#css-chart').css('width', '89%');
    },{offset: '88%'});
    $('#js-chart').waypoint(function() {
        $('#js-chart').css('width', '74%');
    },{offset: '88%'});
    $('#design-chart').waypoint(function() {
        $('#design-chart').css('width', '80%');
    },{offset: '88%'});
    $('#cms-chart').waypoint(function() {
        $('#cms-chart').css('width', '79%');
    },{offset: '88%'});
    $('#life-chart').waypoint(function() {
        $('#life-chart').css('width', '96%');
    },{offset: '88%'});



});

