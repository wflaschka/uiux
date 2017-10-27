// https://stackoverflow.com/questions/7486309/how-to-make-script-execution-wait-until-jquery-is-loaded/17914854#17914854
function defer(method) {
    if (window.jQuery) {
        method();
    } else {
        setTimeout(function() { defer(method) }, 100);
    }
}


// Common JS utilities for site
$(document).ready(function() {

    // // MaterializeCSS
    // // Update forms
    // Materialize.updateTextFields();

    // // Init dropdowns for header nav
    // $("nav .dropdown-user").dropdown();

    // // Init side-nav for mobile
    // $(".button-collapse").sideNav();

    // // Run AnimateCSS animation and remove when done
    // // https://github.com/daneden/animate.css
    // // $('div').animateCSS('bounce');
    // $.fn.extend({
    //     animateCss: function (animationName) {
    //         var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    //         this.addClass('animated ' + animationName).one(animationEnd, function() {
    //             $(this).removeClass('animated ' + animationName);
    //         });
    //         return this;
    //     }
    // });



    ////////////////////////////////////////////////////////////////////
    // Accordion JS
    function openFirstPanel(){
        $('.accordion > dt:first-child').addClass('active').next().slideDown();
    }

    var allPanels = $('.accordion > dt');
    allPanels.next().hide(); // hide all dd elements
    // openFirstPanel(); // open first dd element on load

    $('.accordion > dt').on( "click", function(e) {
        $this = $(this);
        $target =  $this.next();

        if ( $this.hasClass('active') ) {
            $this.removeClass('active').next().slideUp();
        } else {
            $this.parents('.accordion').find('dt').removeClass('active').next().slideUp();
            $this.addClass('active').next().slideDown();
        }

        return false;
    });
    
    ////////////////////////////////////////////////////////////////////
    // See More
    $('.see-more .fade-info-action a').on( "click", function(e) {
        $(this).closest('.see-more').addClass('active');
        e.preventDefault();
    });

});