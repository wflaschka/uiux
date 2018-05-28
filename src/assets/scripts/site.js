// "Defer" method is used in this repo as a convenience
// but won't be used on `atx` repo.
// https://stackoverflow.com/questions/7486309/how-to-make-script-execution-wait-until-jquery-is-loaded/17914854#17914854
function defer(method) {
    if (window.jQuery) {
        method();
    } else {
        setTimeout(function() { defer(method) }, 100);
    }
}

function setElementsHeight(){
    $('.header-dropdown-bg').height( $(document).height() );
    $('.navigation-dropdown.main-menu').height( $(document).height() - $('#header').height() );
    // var menuHeight = $('.navigation-dropdown.main-menu .menu').height();
    // $('.navigation-dropdown.main-menu .menu').height( menuHeight - $('#header').height());
}


// Common JS for site
$(document).ready(function() {

    var elementsHeight = false;

    // DEPRECATED 20180506, this is handled by special cookie code on `atx` repo
    ////////////////////////////////////////////////////////////
    // Header banner
    ////////////////////////////////////////////////////////////
    // $('.header-banner .close').on('click', function(){
    //     $(this).closest('.header-banner').hide();
    // });


    ////////////////////////////////////////////////////////////
    // Select a URL -- event binder
    ////////////////////////////////////////////////////////////
    $('.select-url').on('change', function () {
        var url = $(this).val(); // get selected value
        if (url) { // require a URL
            window.location = url; // redirect
        }
        return false;
    });

    ////////////////////////////////////////////////////////////
    // Accordion JS
    ////////////////////////////////////////////////////////////
    function openFirstPanel(){
        $('.at.accordion > dt:first-child').addClass('active').next().slideDown();
    }

    var allPanels = $('.at.accordion > dt');
    allPanels.next().hide(); // hide all dd elements

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

    $('.see-more-less .action a').on('click', function(e){
        $(this).html() == "See More" ? $(this).html('See Less') : $(this).html('See More');
        e.preventDefault();
    });

    // $('.see-more-less .action a').on( "click", function(e) {
    //     if ( $(this).html('See More') ) {
    //         $(this).html('See Less')
    //     } else {
    //         $(this).html('See More')
    //     }
    //     // console.log($(this).html());
    //     e.preventDefault();
    // });

    $('.see-more .see-more-content').each(function(){
        var dh = $(this).attr('data-height');
        
        if ( $(this).height() > dh ) {
            $(this).parents('.see-more').removeClass('active');
            $(this).height(dh);
        }
    });

    // Hiding tab content with jquery because if hide from css, it doesn't get effect of see more elements.
    $('.tabs-container .tab-content').hide();
    $('.tabs-container').addClass('tabs-init');



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
            $(".header-dropdown-bg").fadeOut();
        } else {
            // else add class and show it
            dropdown.addClass('open');
            content.slideDown('slow');
            $(".header-dropdown-bg").fadeIn();
        }

        if ( elementsHeight == false ) {
            setElementsHeight();
            elementsHeight = true;
            console.log('set Height');
        }
    });



    ////////////////////////////////////////////////////////////
    // Main menu > submenu dropdown
    $('.navigation-dropdown li').has('ul').click(function(){
        submenu = $(this).find('ul');
        if (submenu.is(':hidden')) {
            submenu.slideDown('slow');
            $(this).addClass('active');
        } else {
            submenu.slideUp('slow');
            $(this).removeClass('active');
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


    $('.at.slider').on('init', function(event, slick){

        setElementsHeight();
    });


    // check if Slider exist then run to avoid errors
    if ( $('.at.slider.is-responsive').length ) {

        // if ( $('.page').hasClass('has-sidebar') ) {
            
        //     $('.at.slider.is-responsive').slick({
        //         infinite: false,
        //         slidesToShow: 5,
        //         slidesToScroll: 5,
        //         responsive: [
        //             {
        //               breakpoint: 1100,
        //               settings: {
        //                 slidesToShow: 6,
        //                 slidesToScroll: 6
        //               }
        //             },
        //             {
        //               breakpoint: 950,
        //               settings: {
        //                 slidesToShow: 5,
        //                 slidesToScroll: 5
        //               }
        //             },
        //             {
        //               breakpoint: 800,
        //               settings: {
        //                 slidesToShow: 4,
        //                 slidesToScroll: 4
        //               }
        //             },
        //             {
        //               breakpoint: 650,
        //               settings: {
        //                 slidesToShow: 3,
        //                 slidesToScroll: 3
        //               }
        //             },
        //             {
        //               breakpoint: 530,
        //               settings: {
        //                 slidesToShow: 2,
        //                 slidesToScroll: 2
        //               }
        //             }
        //             // You can unslick at a given breakpoint now by adding:
        //             // settings: "unslick"
        //             // instead of a settings object
        //         ]
        //     });

        // } else {

            $('.at.slider.is-responsive').slick({
                infinite: false,
                slidesToShow: 7,
                slidesToScroll: 7,
                responsive: [
                    {
                      breakpoint: 1100,
                      settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5
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

        // }

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
    $('.flash .close').on('click', function() {
        $(this)
        .closest('.flash')
        .fadeOut();
    });


    ////////////////////////////////////////////////////////////
    // Tags
    // Delete Tag
    ////////////////////////////////////////////////////////////
    $('.tag .close, .tag .delete').on('click', function(e) {
        $(this)
        .closest('.tag')
        .fadeOut();
        e.preventDefault();
    });


    ////////////////////////////////////////////////////////////
    // QL Editor
    ////////////////////////////////////////////////////////////
    // TODO: organize qlCountCharacters() and qlUpdateCount() for QL editor in `site.js`
    //    var toolbarOptions = [
    //        ['bold', 'italic'],
    //    ];
    //
    //    if ( $('.at-ql-editor').length ) {
    //        var editor = new Quill('.at-ql-editor', {
    //            modules: {
    //                toolbar: toolbarOptions
    //            },
    //            theme: 'snow'
    //        });
    //    }
    qlCountCharacters();

    setElementsHeight();
});


function qlCountCharacters() {
    if ( $('.ql-container').attr('data-ql-char-max') ) {
        $('.ql-editor').keydown(function(e) {

            var keycode = e.keyCode;
            var tlength = $(this).text().length;

            // 
            // Ref: https://stackoverflow.com/questions/32471737/maxlength-for-div-like-textarea
            // 

            // List of keycodes of printable characters from:
            var printable = 
            (keycode > 47 && keycode < 58)   || // number keys
            keycode == 32 || keycode == 13   || // spacebar & return key(s) (if you want to allow carriage returns)
            (keycode > 64 && keycode < 91)   || // letter keys
            (keycode > 95 && keycode < 112)  || // numpad keys
            (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
            (keycode > 218 && keycode < 223);   // [\]' (in order)

            if (printable) {
                // get the length of total character typed in ql editor
                remain = parseInt(tlength);
                
                // show typed character in html
                $('.ql-char-count').text(remain);

                // if reached max limit, Stop
                return $(this).text().length <= qlCharMax -1;
            }
        });

        // Get the character max length from data attribute data-ql-char-max="XX"
        var qlCharMax = $('.ql-container').data('ql-char-max');

        // show the max allowed char text in html
        $('.ql-char-max').text(qlCharMax);

    }
}
// When page first loads, run this to set the count:
function qlUpdateCount() {
    tlength = $('.ql-editor').text().length;
    remain = parseInt(tlength);
    $('.ql-char-count').text(remain);
}



$(document).click(function(e) {

    // for Dropdown
    var dropdownContainer = $('.at.dropdown');
    // if the target of the click isn't the container nor a descendant of the container
    if (!dropdownContainer.is(e.target) && dropdownContainer.has(e.target).length === 0) {
        $('.at.dropdown').removeClass('open');
        $('.at.dropdown .dropdown-content').slideUp('slow');
        $(".header-dropdown-bg").fadeOut();
    }

});
