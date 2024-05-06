$('.video-play, .closeButton, #modal-video').on('click',function(){
    $("#modal-video").toggle();
    $("body").toggleClass("overflow-hidden");
    resizeVideo();
});

$(window).on('resize', function(){
    resizeVideo();

}).resize();    

function resizeVideo(){
    $("iframe").each(function(){
        let width = $(this).width();
        $(this).css("height", width / 1.77 + "px");
    });
}
