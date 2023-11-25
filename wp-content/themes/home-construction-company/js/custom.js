jQuery(function($){
	"use strict";
	jQuery('.main-menu-navigation > ul').superfish({
		delay: 500,
		animation: {opacity:'show',height:'show'},
		speed:'fast'
	});
});

function home_construction_company_menu_open() {
	jQuery(".side-menu").addClass('open');
}
function home_construction_company_menu_close() {
	jQuery(".side-menu").removeClass('open');
}

function home_construction_company_search_show() {
	jQuery(".search-outer").addClass('show');
	jQuery(".search-outer").fadeIn();
}
function home_construction_company_search_hide() {
	jQuery(".search-outer").removeClass('show');
	jQuery(".search-outer").fadeOut();
}

(function( $ ) {

	$(window).scroll(function(){
		var sticky = $('.sticky-header'),
		scroll = $(window).scrollTop();

		if (scroll >= 100) sticky.addClass('fixed-header px-lg-3 px-2');
		else sticky.removeClass('fixed-header px-lg-3 px-2');
	});

	// Back to top
	jQuery(document).ready(function () {
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 0) {
      	jQuery('.scrollup').fadeIn();
      } else {
        jQuery('.scrollup').fadeOut();
      }
    });
    jQuery('.scrollup').click(function () {
      jQuery("html, body").animate({
        scrollTop: 0
      }, 600);
      return false;
    });
	});

	// Window load function
	window.addEventListener('load', (event) => {
		jQuery(".preloader").delay(2000).fadeOut("slow");
	});

})( jQuery );

( function( window, document ) {
	function home_construction_company_keepFocusInMenu() {
		document.addEventListener( 'keydown', function( e ) {
			const home_construction_company_nav = document.querySelector( '.side-menu' );

			if ( ! home_construction_company_nav || ! home_construction_company_nav.classList.contains( 'open' ) ) {
				return;
			}

			const elements = [...home_construction_company_nav.querySelectorAll( 'input, a, button' )],
				home_construction_company_lastEl = elements[ elements.length - 1 ],
				home_construction_company_firstEl = elements[0],
				home_construction_company_activeEl = document.activeElement,
				tabKey = e.keyCode === 9,
				shiftKey = e.shiftKey;

			if ( ! shiftKey && tabKey && home_construction_company_lastEl === home_construction_company_activeEl ) {
				e.preventDefault();
				home_construction_company_firstEl.focus();
			}

			if ( shiftKey && tabKey && home_construction_company_firstEl === home_construction_company_activeEl ) {
				e.preventDefault();
				home_construction_company_lastEl.focus();
			}
		} );
	}
	
	function home_construction_company_keepfocus_search() {
		document.addEventListener( 'keydown', function( e ) {
			const home_construction_company_search = document.querySelector( '.search-outer' );

			if ( ! home_construction_company_search || ! home_construction_company_search.classList.contains( 'show' ) ) {
				return;
			}

			const elements = [...home_construction_company_search.querySelectorAll( 'input, a, button' )],
				home_construction_company_lastEl = elements[ elements.length - 1 ],
				home_construction_company_firstEl = elements[0],
				home_construction_company_activeEl = document.activeElement,
				tabKey = e.keyCode === 9,
				shiftKey = e.shiftKey;

			if ( ! shiftKey && tabKey && home_construction_company_lastEl === home_construction_company_activeEl ) {
				e.preventDefault();
				home_construction_company_firstEl.focus();
			}

			if ( shiftKey && tabKey && home_construction_company_firstEl === home_construction_company_activeEl ) {
				e.preventDefault();
				home_construction_company_lastEl.focus();
			}
		} );
	}

	home_construction_company_keepFocusInMenu();

	home_construction_company_keepfocus_search();
} )( window, document );

jQuery(document).ready(function () {
	jQuery( ".tablinks" ).first().addClass( "active" );
});

function home_construction_company_project_tab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  jQuery('#'+ cityName).show()
  evt.currentTarget.className += " active";
}

jQuery(document).ready(function () {
	jQuery('.tabcontent').hide();
	jQuery('.tabcontent:first').show();
});