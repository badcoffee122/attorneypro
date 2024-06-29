;( function( $ ) {

    $(document).ready(function () {

        $('#header_top_mobile_menu').slicknav({
            allowParentLinks: true
        });

        // $('.mobile_menu_icon_bar i.fa-bars').on('click',function () {
        //    $(this).slideUp();
        //    $('.mobile_menu_icon_bar i.fa-xmark').slideDown();
        //    $('ul#mobile-menu').slideDown();
        // });

        // $('.mobile_menu_icon_bar i.fa-xmark').on('click',function () {
        //     $(this).hide('slow');
        //     $('.mobile_menu_icon_bar i.fa-bars').show('slow');
        //     $('ul#mobile-menu').slideUp();
        // });

        $('.mobile_menu_icon_bar i').on('click',function () {
           $(this).toggleClass('fa-bars fa-xmark');
        //    $('.mobile_menu_icon_bar i.fa-xmark').slideDown();
           $('ul#mobile-menu').slideToggle();
        });

        $('.search_icon i').on('click',function () {
            // add class

           $('.search_form').addClass('search__active');
        });

        $('.search_form i.fa-xmark').on('click',function () {
           $('.search_form').removeClass('search__active');
        });

        // append an element 
        $('#mobile-menu li.menu-item-has-children').append("<i class='fa fa-angle-down show-me'></i>");
        $(".show-me").on('click',function(){
            var element = $(this).parent();
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp();
            }
            else {
                element.addClass('open');
                element.children('ul').slideDown();
                element.siblings('li').children('ul').slideUp();
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp();
            }
        });

    });

    /*
    * Sticky Header
    * */

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > 50) {
            $('header#masthead').addClass('stick');
        } else {
            $('header#masthead').removeClass('stick');
        }
    });

} )( jQuery );
