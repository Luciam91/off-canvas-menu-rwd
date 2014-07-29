$(document).ready(function(){
    $(document).on('click tap', '.openNav', function(e){
        e.preventDefault();
        e.stopImmediatePropagation();

        //Get menu
        var toOpen = $(this).data('menu');
        var menu = $('.'+toOpen);
        var openClose = (menu.hasClass('open')) ? true : false;
        var navSides = toOpen.split('-');
        var side = navSides[1];

        (!$(this).hasClass('open')) ? $(this).text('Close '+side+' menu').addClass('open') : $(this).text('Open '+side+' menu').removeClass('open');
        menu.toggleClass('open');


        $(".page-wrap").removeClass('wrap-left wrap-right');
        if(openClose == false) {
            $(".page-wrap").addClass('wrap-'+side);
        }
    });
});