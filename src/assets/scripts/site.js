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


    $('.header-banner .close').on('click', function(){
        $(this).closest('.header-banner').hide();
    });


    ////////////////////////////////////////////////////////////
    // Accordion JS
    ////////////////////////////////////////////////////////////
    function openFirstPanel(){
        $('.at.accordion > dt:first-child').addClass('active').next().slideDown();
    }

    var allPanels = $('.at.accordion > dt');
    allPanels.next().hide(); // hide all dd elements
    // openFirstPanel(); // open first dd element on load

    $('.at.accordion > dt').on( "click", function(e) {
        $this = $(this);
        $target =  $this.next();

        if ( $this.hasClass('active') ) {
            $this.removeClass('active').next().slideUp();
        } else {
            $this.parents('.at.accordion').find('dt').removeClass('active').next().slideUp();
            $this.addClass('active').next().slideDown();
        }

        return false;
    });
    
    
    ////////////////////////////////////////////////////////////
    // See More
    ////////////////////////////////////////////////////////////
    $('.see-more .action a').on( "click", function(e) {
        $(this).closest('.see-more').addClass('active');
        e.preventDefault();
    });


    ////////////////////////////////////////////////////////////
    // Custom Dropdown
    // Check if any dropdown is open;
    // If clicked outside of container of that dropdown then hide that dropdown
    // If another dropdown clicked, then hide others all dropdown except this one clicked
    ////////////////////////////////////////////////////////////
    // On Click opener
    $('.opener').on('click', function(e) {
        e.stopPropagation();

        // get the active dropdown and dropdown content
        var dropdown = $(this).parents('.at.dropdown'),
            content = $(this).parents('.at.dropdown').find('.dropdown-content');

        // Remove class from all dropdown except active
        $('.at.dropdown').not(dropdown).removeClass('open');
        // Hide all dropdown content except active
        $('.at.dropdown .dropdown-content').not(content).slideUp('slow');

        // Check if active dropdown has class 'open'
        if ( dropdown.hasClass('open') ) {
            // then remove class and hide it
            dropdown.removeClass('open');
            content.slideUp('slow');
        } else {
            // else add class and show it
            dropdown.addClass('open');
            content.slideDown('slow');
        }
    });


    ////////////////////////////////////////////////////////////
    // Tabs
    ////////////////////////////////////////////////////////////
    $('.tabs li').on( "click", function(e) {
        var tab_id = $(this).attr('data-tab');

        $('.tabs li').removeClass('is-active');
        $('.tab-content').removeClass('is-active');

        $(this).addClass('is-active');
        $("#"+tab_id).addClass('is-active');
    })



    ////////////////////////////////////////////////////////////
    // Slick Slider
    ////////////////////////////////////////////////////////////
    // check if Slider exist then run to avoid errors
    if ( $('.at.slider').length ) {
        $('.at.slider.is-responsive').slick({
            infinite: false,
            slidesToShow: 7,
            slidesToScroll: 7,
            responsive: [
                {
                  breakpoint: 1100,
                  settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6
                  }
                },
                {
                  breakpoint: 950,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                  }
                },
                {
                  breakpoint: 650,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                },
                {
                  breakpoint: 530,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }


    ////////////////////////////////////////////////////////////
    // Scroll to Element
    // Usage
    // <a data-scroll-to="#foo" class="scroll-to"> -- will target id foo element
    // <a data-scroll-to=".foo" class="scroll-to"> -- will target class foo element
    // <div id="foo">
    // <div class="foo">
    ////////////////////////////////////////////////////////////
    $(document).on( 'click', '.scroll-to', function(e) {
        $('html, body').animate( {scrollTop: $($(this).attr('data-scroll-to')).offset().top -30 }, 1000);
    });


    ////////////////////////////////////////////////////////////
    // Flash Messages
    // hide flash message
    ////////////////////////////////////////////////////////////
    $('.flash .close')
    .on('click', function() {
        $(this)
        .closest('.flash')
        .fadeOut();
    });


    ////////////////////////////////////////////////////////////
    // Tags
    // Delete Tag
    ////////////////////////////////////////////////////////////
    $('.tag .close')
    .on('click', function(e) {
        $(this)
        .closest('.tag')
        .fadeOut();
        e.preventDefault();
    });


});

$(document).click(function(e) {

    // for Dropdown
    var dropdownContainer = $('.at.dropdown');
    // if the target of the click isn't the container nor a descendant of the container
    if (!dropdownContainer.is(e.target) && dropdownContainer.has(e.target).length === 0) {
        $('.at.dropdown').removeClass('open');
        $('.at.dropdown .dropdown-content').slideUp('slow');
    }

});
