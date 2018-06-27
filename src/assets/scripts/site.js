// Common JS for site
$(document).ready(function() {

    var elementsHeight = false;

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
    // Tooltips
    ////////////////////////////////////////////////////////////
    $('[data-toggle="tooltip"]').tooltip()

    ////////////////////////////////////////////////////////////
    // Send message clicks
    ////////////////////////////////////////////////////////////
    $('a.click-send-a-message').click(function(event){
        event.preventDefault();
        this.blur(); // Manually remove focus from clicked link.

        $.get($(this).data('url')) 
            .done(function( html ) {

                $(html).appendTo('body').modal();

            })
            .fail(function( error ) {
                if ('Unauthorized' == error.responseJSON['error']) {
                    $("#must-sign-in-modal-to-send-message").modal();
                }
            });

    });
    $('body').on($.modal.CLOSE, function() {
        $('#messages-modal-sent').remove(); 
        $('#artist-social-feed-modal').find('a span.loader-spinner').hide(); 
        $('.social-feed-links a span.loader-spinner').hide(); 
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
    // Slick Slider
    ////////////////////////////////////////////////////////////
    $('.at.slider').on('init', function(event, slick){
        setElementsHeight();
    });

    if ( $('.at.slider.slide2').length ) {
        $('.at.slider.slide2').slick({
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            variableWidth: false
        });
    }

    // check if Slider exist then run to avoid errors
    if ( $('.at.slider.is-responsive').length ) {
        $('.at.slider.is-responsive').slick({
            infinite: false,
            variableWidth: true
        });
    }

    ////////////////////////////////////////////////////////////
    // QL Editor
    ////////////////////////////////////////////////////////////
    qlCountCharacters();

    setElementsHeight();
});

////////////////////////////////////////////////////////////////////
// Trigger these for each pageload
$( document ).ready(function() {

    ////////////////////////////////////////////////////////////////////
    // Show flash messages if we have any
    showFlashMessages();

    ////////////////////////////////////////////////////////////////////
    // Look for people who can be followed and check if user is following them
    updateFollowables();

    ////////////////////////////////////////////////////////////////////
    // Look for items to like, and check if user has liked them
    updateLikeables();

});

// ////////////////////////////////////////////////////////////
// // Accordion JS
// ////////////////////////////////////////////////////////////
// function openFirstPanel(){
//     $('.at.accordion > dt:first-child').addClass('active').next().slideDown();
// }
// 
// function initializeAccordions() {
//     var allPanels = $('.at.accordion > dt');
//     allPanels.next().hide(); // hide all dd elements
//     openFirstPanel();
// }
// 
// $('.at.accordion > dt').on( "click", function(e) {
//     $this = $(this);
//     $target =  $this.next();
// 
//     if ( $this.hasClass('active') ) {
//         $this.removeClass('active').next().slideUp();
//     } else {
//         $this.parents('.at.accordion').find('dt').removeClass('active').next().slideUp();
//         $this.addClass('active').next().slideDown();
//     }
// 
//     return false;
// });

////////////////////////////////////////////////////////////////////
// Any change in a select, even if same option selected again
// https://stackoverflow.com/a/23297683
(function ($) {
    $.fn.selected = function (fn) {
        return this.each(function () {
            $(this).focus(function () {
                this.dataChanged = false;
            }).change(function () {
                this.dataChanged = true;
                fn(this);
            }).blur(function (e) {
                if (!this.dataChanged) {
                    fn(this);
                }
            });
        });
    };
})(jQuery);


////////////////////////////////////////////////////////////////////
// COLLECTION CREATION OBJECT
function CollectionCreate(uniqueId, routeCreateNewCollection, redirectTo) {
    this.uniqueId                  = uniqueId;
    this.routeCreateNewCollection  = routeCreateNewCollection;
    this.createNewCollectionId     = '#create-new-collection-' + uniqueId;
    this.createNewCollectionSelect = '#create-new-collection-select-' + uniqueId;
    this.redirectTo                = redirectTo;

    this.init = function() {
        var self = this;
        $(this.createNewCollectionSelect).click(function(e){
            // e.preventDefault();
            self.collectionFormShow();
        });
    }

    ////////////////////////////////////////////////////////////////////
    // If the create new option is selected
    // this.createNewCollection = function() {
    this.collectionFormShow = function() {
        $(this.createNewCollectionId).slideDown('slow');

        var self = this;

        ////////////////////////////////////////////////////////////////////
        // If a new collection form event
        $(this.createNewCollectionId).submit(function(e){
            e.preventDefault();

            var formdata = {
                'name'      : $(self.createNewCollectionId + ' input[name="name"]').val(),
                'is_public' : $(self.createNewCollectionId + ' input[name=is_public]:checked').val(),
                'p'         : self.productId,
                '_token'    : $('meta[name="csrf-token"]').attr('content')
            };

            var posting = $.post(self.routeCreateNewCollection, formdata);
            posting.always(function() {});
            posting.done(function( data ) {

                $(self.createNewCollectionId).slideUp('slow');
                // console.log("Redirect to: `%s`", (self.redirectTo + data.collectionSlug));
                window.location.replace(self.redirectTo + data.collectionSlug);

            });
            posting.fail(function( error ) {
                // console.log("👎 createNewCollection(): Could not add artwork to new collection");
            });

        });

    };
}


////////////////////////////////////////////////////////////////////
// COLLECTION DROPDOWN OBJECT
function CollectionDropdown(uniqueId, productId, isModalContext = false, newCollectionRouteAdd, collectionRouteAdd, collectionRouteGetAll) {
    this.productId             = productId;
    this.collectionRouteAdd    = collectionRouteAdd;
    this.collectionRouteGetAll = collectionRouteGetAll;
    this.newCollectionRouteAdd = newCollectionRouteAdd;
    this.dropdownId            = '#add-to-collection-' + uniqueId;
    this.createNewCollectionId = '#create-new-collection-' + uniqueId;

    ////////////////////////////////////////////////////////////////////
    // If the create new option is selected
    this.createNewCollection = function() {
        $(this.createNewCollectionId).slideDown('slow');
    };

    ////////////////////////////////////////////////////////////////////
    // Fires if the pulldown selection changes
    this.setSelectedCollection = function(self) {
        var dropdownId = self.dropdownId;
        var selectedCollection = $(dropdownId).find("option:selected").val();

        // If nothing is selected
        if ('' == selectedCollection) {
            return false;
        }

        // Create new Collection
        if ('new' == selectedCollection) {
            self.clearCollectionOptions();
            self.getCollectionOptions();
            self.createNewCollection();

            ////////////////////////////////////////////////////////////////////
            // If a new collection form event
            $(self.createNewCollectionId).submit(function(e){
                e.preventDefault();

                var formdata = {
                    'name'      : $(self.createNewCollectionId + ' input[name="name"]').val(),
                    'is_public' : $(self.createNewCollectionId + ' input[name=is_public]:checked').val(),
                    'p'         : self.productId,
                    '_token'    : $('meta[name="csrf-token"]').attr('content')
                };

                var posting = $.post(self.newCollectionRouteAdd, formdata);
                posting.always(function() {});
                posting.done(function( data ) {
                    $(self.createNewCollectionId).slideUp('slow');
                    self.clearCollectionOptions();
                    self.getCollectionOptions();
                });
                posting.fail(function( error ) {
                    // console.log("👎 createNewCollection(): Could not add artwork to new collection");
                });

            });


            return false;
        }

        // Otherwise something was selected: associate product with collection
        var formdata = {
             'c'      : $(dropdownId).find("option:selected").val()
            ,'p'      : self.productId
            ,'_token' : $('meta[name="csrf-token"]').attr('content')
        };

        // var posting = $.post(this.collectionRouteAdd, formdata);
        var posting = $.post(self.collectionRouteAdd, formdata);
        posting.always(function() {});
        posting.done(function( data ) {});
        posting.fail(function( error ) {});
    }

    ////////////////////////////////////////////////////////////////////
    // Get the current options
    this.getCollectionOptions = function() {
        console.log("Running getCollectionOptions()");

        var self = this;
        $.get( this.collectionRouteGetAll )
            .done(function( data ) {

                $(self.dropdownId).append('<option value="">Add to a Collection</option>');
                $.each(data.results, function(id,name) {
                    if (id == data.selected) {
                        $(self.dropdownId).append('<option selected="selected" value="' + id + '">Collection: "' + name + '"</option>');
                    } else {
                        $(self.dropdownId).append('<option value="' + id + '">' + name + '</option>');
                    }
                });
                $(self.dropdownId).append('<option value="new">(Create New Collection)</option>');

                // If option selection changes
                $(self.dropdownId).change(function() {
                    console.warn("Setting trigger for change event #1");
                    console.warn("self.dropdownId: %s", self.dropdownId);
                    self.setSelectedCollection(self);
                });

                $(self.dropdownId).select2({
                    placeholder: 'Add to Collection',
                    minimumResultsForSearch: -1,
                });

            })
            .fail(function() {
                console.warn("Error getting users's collections.");
            });
    };

    ////////////////////////////////////////////////////////////////////
    // Get the current options
    this.clearCollectionOptions = function() {
        $(this.dropdownId).select2('destroy');
        $(this.dropdownId).find('option').remove();
    };
}

// SHOW AJAX VALIDATION ERRORS IN THE SUBMITTING FORM
// 20180613
// 
// If we get past native browser validation, and laravel returns 
// a 4XX code and a JSON object with error messages, we can 
// map the errors to fields with this function. Fields may have
// 1..N different error messages.
// 
// UNKNOWN: If this function handles form field names like `list[]` or `package[names][]`
// 
// USAGE:
// 
// 		var posting = $.post(url, formdata);
// 		:
// 		:
// 		posting.fail(function( response ) {
// 		    console.log("👎 Form submit error");
// 		    displayAsyncFormFieldErrors('form.address-form', response);
// 		});


function displayAsyncFormFieldErrors(strFormQuery, response) {
    var $form = $(strFormQuery);
    var errors = response.responseJSON;

    if ('errors' in errors) {
        // Laravel native validation sends back full error message
        errors = errors.errors;
    }

    $form.find('button[type="submit"]').removeClass('is-loading');
    $form.find('span.help.is-red').remove();

    console.log(errors);
    $.each(errors, function(field, error_messages){
        console.log("> `%s` has [%s] error(s)", field, error_messages.length);
        $.each(error_messages, function(idx, error_message) {
            console.log("   > %s", error_message);
            $err = $("<span>", { "class": "help is-red" }).html("&bull;&nbsp;" + error_message);
            $form.find('[name="'+field+'"]').parent().after($err);
        });
    });
}

////////////////////////////////////////////////////////////////////
// Flash message staggering
// When a page is loading there are flash messages in the page, show them staggered
function showFlashMessages() {
    // console.log("FLASH MESSAGES: showing");
    $('.at-flash-wrapper .flash-message').each(function (i, obj) {
        $(obj).delay(i * 500).fadeIn(150).delay(4000).fadeOut(150, function(){
            $(this).remove();
        });
    });
}

////////////////////////////////////////////////////////////////////
// Create a flash message programmatically
// For flash messages that are created via JS
// No matter where scrolled, shows offset from top of viewport.
// USAGE
//   makeFlashMessage('Here is a SUCCESS flash', 'success');
//   makeFlashMessage('Here is a WARNING flash', 'warning');
//   makeFlashMessage('Here is an IMPORTANT flash', 'important');
//   makeFlashMessage('Here is an ERROR flash', 'error');
//   makeFlashMessage('', 'error');
//   makeFlashMessage('There should not be an empty flash before this', 'warning');
function makeFlashMessage(message, level='success') {

    var notice = $('<div class="flash-message at-flash-block"><div class="at flash level-here"><span>text</span></div></div>');
    notice.find('.level-here').addClass(level);
    notice.find('span').html(message);

    notice.css('position', 'absolute');
    notice.css('z-index', 10000);
    $('body').append(notice.hide());
    notice.css('right', '80px');
    notice.css('top', $(window).scrollTop() + 'px');
    notice.fadeIn();

    function remove_notice() { notice.fadeOut(function() { notice.remove() }); }
    setTimeout(remove_notice, 3000);
}


////////////////////////////////////////////////////////////
// Flash Messages
// hide flash message
////////////////////////////////////////////////////////////
$('.flash .close').on('click', function() {
    $(this)
    .closest('.flash')
    .fadeOut();
});


////////////////////////////////////////////////////////////////////
// UPDATE FOLLOW/UNFOLLOW FOR USER FOR ALL FOLLOWABLES (NOW) ON SCREEN

var updatedFollowables = false;
function updateFollowables() {

    // If !null, then it's a non-user
    // Do not try to check host, we'll get 403 Forbidden
    if (xcache) {
        return false;
    }

    // console.log("⭐ Updating followables...");
    var followables = $('body').find('figure.avatar [data-followable]');
    var list = [];
    followables.each(function(){
        list.push($(this).attr('data-followable'));
    });

    if ( 1 > list.length) {
        return false;
    }

    var formdata = {
        'list': list, 
        '_token': $('meta[name="csrf-token"]').attr('content')
    };

    var posting = $.post('/follow-check', formdata);
    posting.always(function() {});
    posting.done(function( data ) {
        for (var i = data.followed.length - 1; i >= 0; i--) {
            $('#follow-'+data.followed[i]).removeClass('follow').addClass('followed');
        }
        updatedFollowables = true;
    });

    posting.fail(function( error ) {
        // console.log("👎 updateFollowables: FAILED");
        if ('Unauthorized' == error.responseJSON['error']) {
        }
        updatedFollowables = false;
    });
}

////////////////////////////////////////////////////////////////////
// FOLLOWABLES -- clicking a user's follow button
// $('body').on('click', '.modal .follow-artist a', function(){ followArtist($(this)); return false; });
// $('body').on('click', '.modal .follow-artist span[data-followable]', function(){ followArtist($(this)); return false; });
$('body').on('click', '.follow-artist a', function(){ followArtist($(this)); return false; });
$('body').on('click', '.follow-artist span[data-followable]', function(){ followArtist($(this)); return false; });
$('body').on('click', 'figure.avatar .avatar-status', function(){ followArtist($(this)); return false; });
function followArtist(cli) {

    var followId = cli.attr('data-followable');
    var url = cli.attr('data-follow');
    $.get( url ) 
        .done(function( result ) {

            if ('followed' == result) {
                cli.removeClass('follow').addClass('followed');
                cli.find('.follow-artist-label').html("Following Artist");

                // Elements behind the modal:
                $('body').find('[data-followable="'+followId+'"]').removeClass('follow').addClass('followed');
            } else {
                cli.removeClass('followed').addClass('follow');
                cli.find('.follow-artist-label').html("Follow Artist");

                // Elements behind the modal:
                $('body').find('[data-followable="'+followId+'"]').removeClass('followed').addClass('follow');
            }

            updateFollowCount(followId);

            if ('followed' == result) {
                showFollowConfirmationModal();
            }

        })
        .fail(function( error ) {
            // makeFlashMessage("You must be logged in to follow an artist.", 'warning');
            if ('Unauthorized' == error.responseJSON['error']) {
                 $("#must-sign-in-modal-for-follow").modal();
             }
        });
    return false;
}


function showFollowConfirmationModal() {
    //  TODO: Show this modal without the blocker overlay
    $("#artist-was-followed-modal").modal({
        closeExisting : false,     // Close existing modals. Set this to false if you need to stack multiple modal instances.
        escapeClose   : true,      // Allows the user to close the modal by pressing `ESC`
        clickClose    : true,      // Allows the user to close the modal by clicking the overlay
        closeText     : '',        // Text content for the close <a> tag.
        closeClass    : '',        // Add additional class(es) to the close <a> tag.
        showClose     : false,      // Shows a (X) icon/link in the top-right corner
        modalClass    : "modal",   // CSS class added to the element being displayed in the modal.
        blockerClass  : "blocker", // CSS class added to the overlay (blocker).
        spinnerHtml   : null,      // HTML appended to the default spinner during AJAX requests.
        // showSpinner   : true,      // Enable/disable the default spinner during AJAX requests.
        fadeDuration  : 200,       // Number of milliseconds the fade transition takes (null means no transition)
        fadeDelay     : 0.8        // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
        ,appendTo     : 'body'     // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
    });

    $("#artist-was-followed-modal").on($.modal.OPEN, function(event, modal) {
        setTimeout(function() {
            $.modal.getCurrent().close();
        }, 800);
    });

}

function updateFollowCount(dataId) {
    var elem = '[data-artist-follow-count="'+dataId+'"]';
    if(! $(elem).length ) {
        return false;
    }
    $(elem).load( '/follow-count-for/' + dataId );
}

////////////////////////////////////////////////////////////////////
// getComponent -- ajax.get a page component
function getComponent(componentSelector, url, triggerSlider = false, sliderArgs = []) {
    console.log("Updating component '%s'...", componentSelector);
    $.get( url )
        .done(function( data ) {
            $(componentSelector).html( data );
            console.log("    - Updated component '%s'...", componentSelector);
            if (triggerSlider == true) {
                $('body').find(componentSelector).find('.at.slider').slick(sliderArgs);
            }
            updateFollowables();
            updateLikeables();
        })
        .fail(function() {
            // $(componentSelector).html('<p discussion>"' + componentSelector + '" failed to load.</p>');
        });
    return false;
}

////////////////////////////////////////////////////////////
// Custom Dropdown
// Check if any dropdown is open;
// If clicked outside of container of that dropdown then hide that dropdown
// If another dropdown clicked, then hide others all dropdown except this one clicked
////////////////////////////////////////////////////////////
// On Click opener
$('.opener').on('click', function(e) {

    e.preventDefault();
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

        if ( ! $(this).parent().hasClass('no-bg') ) {
            $(".header-dropdown-bg").fadeOut();
        }
    } else {
        // else add class and show it
        dropdown.addClass('open');
        content.slideDown('slow');

        if ( ! $(this).parent().hasClass('no-bg') ) {
            $(".header-dropdown-bg").fadeIn();
        }
    }

    // 20180622 for some reason throwing "undefined" even when set above as `false`. This might mean that JS thinks var is declared but value still undefined?
    // if ( elementsHeight == false ) {
    if (typeof elementsHeight != 'undefined') {
        setElementsHeight();
        elementsHeight = true;
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


function setElementsHeight(){
    $('.header-dropdown-bg').height( $(document).height() );
    $('.navigation-dropdown.main-menu').height( $(document).height() - $('#header').height() );
    // var menuHeight = $('.navigation-dropdown.main-menu .menu').height();
    // $('.navigation-dropdown.main-menu .menu').height( menuHeight - $('#header').height());
}



////////////////////////////////////////////////////////////////////
// CLICKING BACKGROUND
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

////////////////////////////////////////////////////////////////////
// LIKED -- get liked items that are (now) on screen
var updatedLikeables = false;
function updateLikeables() {

    // If !null, then it's a non-user
    // Do not try to check host, we'll get 403 Forbidden
    if (xcache) {
        return false;
    }

    // console.log("⭐ Updating likes...");
    var likeables = $('body').find('[data-id].heart');
    var list = [];

    likeables.each(function(){
        // console.log("    ^ Can like: %s", $(this).attr('data-id'));
        list.push($(this).attr('data-id'));
    });

    if ( 1 > list.length) {
        // console.log("👎 Not enough likeables to try to check.");
        return false;
    }

    var formdata = {
        'list': list, 
        '_token': $('meta[name="csrf-token"]').attr('content')
    };

    var posting = $.post('/like-check', formdata);
    posting.always(function() {});
    posting.done(function( response ) {
        for (var i = response.liked.length - 1; i >= 0; i--) {
            var cli = $('[data-id="' + response.liked[i] + '"]');
        	$(cli).addClass('is-hearted').addClass("is-being-clicked");
		    setTimeout(function(){
		        cli.removeClass("is-being-clicked");
		    }, 750);
        }
        updatedLikeables = true;
    });

    posting.fail(function( error ) {
        if ('Unauthorized' == error.responseJSON['error']) {
        }
        updatedLikeables = false;
    });
}

////////////////////////////////////////////////////////////////////
// LIKING -- user is clicking a heart 
// If the toggling heart on/off diesn't seem to be working, it might 
// be because API requests to `localhost:3000` cause a problem. When
// the URL is `at.dev` it works.
$('body').on('click', '.heart', function(){

    var cli = $(this);
    var dataId = $(this).attr('data-id'); 

    $.get( '/like-artwork/' + dataId ) 
        .done(function( result ) {

            if ('liked' == result) {
                cli.addClass('is-hearted');
                $('body').find('[data-id="' + dataId + '"]').addClass('is-hearted');
            } else {
                cli.removeClass('is-hearted');
                // and the rest (e.g. behind modal)
                $('body').find('[data-id="' + dataId + '"]').removeClass('is-hearted');
            }

            updateLikeCount(dataId);

            cli.addClass("is-being-clicked");
            setTimeout(function(){
                $('.heart').removeClass("is-being-clicked");
            }, 750);

            if ('liked' == result) {
                showHeartConfirmationModal();
            }


        })
        .fail(function( error ) {
            if ('Unauthorized' == error.responseJSON['error']) {
                // console.log("Unauthorized like!");
                // makeFlashMessage("You must be logged in to heart an artwork.", 'warning');
                $("#must-sign-in-modal-for-heart").modal();
            }
        });

    return false;
});

function showHeartConfirmationModal() {
    //  TODO: Show this modal without the blocker overlay
    $("#piece-was-saved-to-heart-gallery").modal({
        closeExisting : false,     // Close existing modals. Set this to false if you need to stack multiple modal instances.
        escapeClose   : true,      // Allows the user to close the modal by pressing `ESC`
        clickClose    : true,      // Allows the user to close the modal by clicking the overlay
        closeText     : '',        // Text content for the close <a> tag.
        closeClass    : '',        // Add additional class(es) to the close <a> tag.
        showClose     : false,      // Shows a (X) icon/link in the top-right corner
        modalClass    : "modal",   // CSS class added to the element being displayed in the modal.
        blockerClass  : "blocker", // CSS class added to the overlay (blocker).
        spinnerHtml   : null,      // HTML appended to the default spinner during AJAX requests.
        // showSpinner   : true,      // Enable/disable the default spinner during AJAX requests.
        fadeDuration  : 200,       // Number of milliseconds the fade transition takes (null means no transition)
        fadeDelay     : 0.8        // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
        ,appendTo     : 'body'     // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
    });

    // https://gist.github.com/kylefox/10913825
    $("#piece-was-saved-to-heart-gallery").on($.modal.OPEN, function(event, modal) {

        // Use setTimeout to close the modal in 5 seconds (5000 milliseconds).
        // console.log("Showing modal #piece-was-saved-to-heart-gallery")
        setTimeout(function() {
            $.modal.getCurrent().close();
        }, 800);

    });

}

function updateLikeCount(dataId) {
    var elem = '[data-product-like-count="'+dataId+'"]';
    if(! $(elem).length ) {
        return false;
    }
    $(elem).load( '/like-count-for/' + dataId );
}

// Was in the masonry partial
// FUTURE: (possibly) Disabling load on scroll maybe needed someday: https://infinite-scroll.com/options.html#loadonscroll
// FUTURE: (possibly) Button to load https://infinite-scroll.com/options.html#loadonscroll

$( document ).ready(function() {
    initializeMasonry();
});

// TODO: on.infiniteLoaded run toggle hearts and follows

function initializeMasonry() {
    ////////////////////////////////////////////////////////////////////
    // Initialize masonry wherever we find it
    // Assume that XHRequest being handed off to Infinite Scroll is HTML

    var $grid = $('.masonry-grid').masonry({
        "itemSelector": ".card",
        // "columnWidth": 170,
        "gutter": '.gutter-size',
        "columnWidth": '.grid-size'
    });
    // console.log('initializeMasonry(): set \$grid for .masonry-grid');

    $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
    });

    var $layouter = $grid.data('masonry');
    // console.log('initializeMasonry(): set \$layouter for grid data');

    var infscroll = $('.masonry-grid').infiniteScroll({
        path: '.pagination-infinite a',
        append: '.card.masonry',
        outlayer: $layouter,
        status: '.page-load-status',
        history: false,
        debug: true,
    });
    // console.log('initializeMasonry(): set `infscroll` for infiniteScroll()');

    $grid.on( 'append.infiniteScroll', function( event, response, path, items ) {
        console.log( 'Loaded: ' + path );
        // Reset updatedLikeables flag to permit updating again with pageload
        updatedFollowables = false;
        updatedLikeables = false;
        updateFollowables();
        updateLikeables();
    });
}

// MODAL ADDRESS FORM HANDLING
// 
// This handles the trigger button click, and the form submit with error presentation.

$( document ).ready(function() {

    $('.modal-address-trigger-modal').click(function(event) {
        event.preventDefault();
        this.blur(); // Manually remove focus from clicked link.
        $.get($(this).data('url'), function(html) {
            $(html).appendTo('body').modal();
        });
    });

    var formElement = 'form.modal-address-form';
    $(document).on('submit', formElement, function (e) {
        e.preventDefault();

        var url = $(formElement).attr('action');
        var formdata = $(formElement).serialize();

        var posting = $.post(url, formdata);
        posting.always(function() {
            $(formElement).find('button[type="submit"]').addClass('is-loading');
        });
        posting.done(function( response ) {
            $(formElement).find('button[type="submit"]').removeClass('is-loading');
            $.modal.close();
            location.reload(true);
        });
        posting.fail(function( response ) {
            console.log("👎 Form submit error");
            displayAsyncFormFieldErrors(formElement, response);
        });

    });

});

// Handles modal contact form submissions


var modalContactUsFormElement = '#modal-contact-us form.contact-us-form';
$(document).on('submit', modalContactUsFormElement, function (e) {
    e.preventDefault();
    this.blur();
    
    var url = $(modalContactUsFormElement).attr('action');
    var formdata = $(modalContactUsFormElement).serialize();

    $.ajax({
        type    : "POST",
        url     : url,
        data    : formdata,
        success : function (response){
            
            makeFlashMessage('Thank you! Your message has been sent.', 'success');
            $.modal.close();
            // Reset fields so they're not there the next time the modal loads
            $(modalContactUsFormElement).find('input[type=text], textarea').val('')
            
        },
        error: function (error){

            makeFlashMessage('There was a problem sending the message. Please check your form inputs.', 'error');
            displayAsyncFormFieldErrors(modalContactUsFormElement, error)

        }
    });

    
});

// WHAT THIS DOES:
// Visitor is not signed-in 
// and clicks "follow" or "heart",
// they get a warning modal. When
// they click the CTA button, scroll
// up and trigger the register/sign-in 
// menu.

$('.button-trigger-sign-in').click(function(e){
    e.preventDefault();
    $.modal.close();
    this.blur();

    // In case this is a nested modal:
    if ($.modal.getCurrent()) {
        $.modal.getCurrent().close();
    }

    // https://stackoverflow.com/questions/8790752/callback-of-animate-gets-called-twice-jquery
    $('html, body').animate(
        {scrollTop: $('html').offset().top }, 
        1000,
        'swing'
    ).promise().then(function(){
        $('.sign-in-register.opener').click();
    });
});

////////////////////////////////////////////////////////////////////
// Show product modals
// https://github.com/kylefox/jquery-modal
$('body').on('click', 'a[product-modal]', function(){
    var url = $(this).attr('product-modal');
    var productModal = {
        closeExisting : true,      // Close existing modals. Set this to false if you need to stack multiple modal instances.
        escapeClose   : true,      // Allows the user to close the modal by pressing `ESC`
        clickClose    : true,      // Allows the user to close the modal by clicking the overlay
        closeText     : '',        // Text content for the close <a> tag.
        closeClass    : '',        // Add additional class(es) to the close <a> tag.
        showClose     : true,      // Shows a (X) icon/link in the top-right corner
        modalClass    : "modal large",   // CSS class added to the element being displayed in the modal.
        blockerClass  : "blocker", // CSS class added to the overlay (blocker).
        spinnerHtml   : null,      // HTML appended to the default spinner during AJAX requests.
        showSpinner   : true,      // Enable/disable the default spinner during AJAX requests.
        fadeDuration  : 250,       // Number of milliseconds the fade transition takes (null means no transition)
        fadeDelay     : 0.8        // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
    }

    console.log("Modal request for: %s", url);

    $('#product-modal').remove();
    $.get( url )
        .done(function( newHTML ) {
            console.log("👍 MODAL DONE");
            updatedFollowables = false;
            updateFollowables();
            updatedLikeables = false;
            updateLikeables();

            $(newHTML).appendTo('body');
            $('#product-modal').modal(productModal);
            $('#product-modal').on($.modal.OPEN, function(event, modal) {
                $('#product-modal select.select2').select2({
                    placeholder: function(){
                        $(this).data('placeholder');
                    },
                });
            });

        })
        .fail(function( result ) {
            console.log("👎 MODAL FAILED");
        });
    return false;

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

// ////////////////////////////////////////////////////////////
// // See More
// ////////////////////////////////////////////////////////////
// $('.see-more .action a').on( "click", function(e) {
//     $(this).closest('.see-more').addClass('active');
//     e.preventDefault();
// });
// 
// $('.see-more-less .action a').on('click', function(e){
//     $(this).html() == "See More" ? $(this).html('See Less') : $(this).html('See More');
//     e.preventDefault();
// });
// 
// // $('.see-more-less .action a').on( "click", function(e) {
// //     if ( $(this).html('See More') ) {
// //         $(this).html('See Less')
// //     } else {
// //         $(this).html('See More')
// //     }
// //     // console.log($(this).html());
// //     e.preventDefault();
// // });
// 
// function handleSeeMoreContent() {
//     $('.see-more .see-more-content').each(function(){
//         var dh = $(this).attr('data-height');
// 
//         if ( $(this).height() > dh ) {
//             $(this).parents('.see-more').removeClass('active');
//             $(this).height(dh);
//         }
//     });
// }
// 


// ////////////////////////////////////////////////////////////
// // Slick Slider
// ////////////////////////////////////////////////////////////
// function setUpSliders() {
// 
//     $('.at.slider').on('init', function(event, slick){
//         // console.log('slider init');
//         setElementsHeight();
//     });
// 
//     // After pageload, set up slider
//     $(document).click(function(e) {
//         if ( $('.at.slider.slide2').length ) {
// console.log( $('.at.slider.slide2').html() );
//             $('.at.slider.slide2').slick({
//                 infinite: false,
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//                 variableWidth: false
//             });
//         }
//         // check if Slider exist then run to avoid errors
//         if ( $('.at.slider.is-responsive').length ) {
//             $('.at.slider.is-responsive').slick({
//                 infinite: true,
//                 variableWidth: true,
//             });
//         }
//     });
//     
// }

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
// Tags
// Delete Tag
////////////////////////////////////////////////////////////
$('.tag .close, .tag .delete').on('click', function(e) {
    $(this)
    .closest('.tag')
    .fadeOut();
    e.preventDefault();
});
