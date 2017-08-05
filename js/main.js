$(function() {
	indexSlider = function() {
		// Slideshow 4
		$("#slider-index").responsiveSlides({
		  auto: true,
		  pager: true,
		  nav: true,
		  speed: 500,
		  namespace: "callbacks",
		  before: function () {
		    $('.events').append("<li>before event fired.</li>");
		  },
		  after: function () {
		    $('.events').append("<li>after event fired.</li>");
		  }
		});
	}

	scrollNavbar = function() {
		$(window).scroll(function() {
		    if ($(".navbar").offset().top > 700) {
		        $(".navbar").addClass("top-nav");
		    }else {
		        $(".navbar").removeClass("top-nav");
		    }
		});
	};
	// Loading page
	loaderPage = function() {
		$(".az-loader").fadeOut("slow");
		$('body').removeClass('scroll-loader');
	};

	honeycombs = function() {
		$('.honeycombs').honeycombs({
			combWidth:250,
			margin: -20,
			threshold: 3
		});
	};

	awesome_input_focus_effects = function(){// JavaScript for label effects only
		$(window).load(function(){
			$("input").val("");
			$("input,textarea").focusout(function(){
				if($(this).val() != ""){
					$(this).addClass("has-content");
				}else{
					$(this).removeClass("has-content");
				}
			})
		});
	};

    initMap = function(){
        // Styles a map in night mode.
		var map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: 10.18056, lng: -68.00389},
		    zoom: 10,
		    styles: 
				 [
				    {
				        "featureType": "all",
				        "elementType": "labels.text.fill",
				        "stylers": [
				            {
				                "saturation": 36
				            },
				            {
				                "color": "#000000"
				            },
				            {
				                "lightness": 40
				            }
				        ]
				    },
				    {
				        "featureType": "all",
				        "elementType": "labels.text.stroke",
				        "stylers": [
				            {
				                "visibility": "on"
				            },
				            {
				                "color": "#000000"
				            },
				            {
				                "lightness": 16
				            }
				        ]
				    },
				    {
				        "featureType": "all",
				        "elementType": "labels.icon",
				        "stylers": [
				            {
				                "visibility": "on"
				            }
				        ]
				    },
				    {
				        "featureType": "administrative",
				        "elementType": "geometry.fill",
				        "stylers": [
				            {
				                "color": "#000000"
				            },
				            {
				                "lightness": 20
				            }
				        ]
				    },
				    {
				        "featureType": "administrative",
				        "elementType": "geometry.stroke",
				        "stylers": [
				            {
				                "color": "#000000"
				            },
				            {
				                "lightness": 17
				            },
				            {
				                "weight": 1.2
				            }
				        ]
				    },
				    {
				        "featureType": "landscape",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#000000"
				            },
				            {
				                "lightness": 20
				            }
				        ]
				    },
				    {
				        "featureType": "poi",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#000000"
				            },
				            {
				                "lightness": 21
				            }
				        ]
				    },
				    {
				        "featureType": "road.highway",
				        "elementType": "geometry.fill",
				        "stylers": [
				            {
				                "color": "#000000"
				            },
				            {
				                "lightness": 17
				            }
				        ]
				    },
				    {
				        "featureType": "road.highway",
				        "elementType": "geometry.stroke",
				        "stylers": [
				            {
				                "color": "#000000"
				            },
				            {
				                "lightness": 29
				            },
				            {
				                "weight": 0.2
				            }
				        ]
				    },
				    {
				        "featureType": "road.arterial",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#000000"
				            },
				            {
				                "lightness": 18
				            }
				        ]
				    },
				    {
				        "featureType": "road.local",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#000000"
				            },
				            {
				                "lightness": 16
				            }
				        ]
				    },
				    {
				        "featureType": "transit",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#000000"
				            },
				            {
				                "lightness": 19
				            }
				        ]
				    },
				    {
				        "featureType": "water",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#000000"
				            },
				            {
				                "lightness": 17
				            }
				        ]
				    }
				]
		    
		}); 
    	var marker = new google.maps.Marker({
    	    position: {lat: 10.18056, lng: -68.00389},
    	    map: map
    	});
    };

	(function() {
		// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
		if (!String.prototype.trim) {
			(function() {
				// Make sure we trim BOM and NBSP
				var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				String.prototype.trim = function() {
					return this.replace(rtrim, '');
				};
			})();
		}

		[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
			// in case the input is already filled..
			if( inputEl.value.trim() !== '' ) {
				classie.add( inputEl.parentNode, 'input--filled' );
			}

			// events:
			inputEl.addEventListener( 'focus', onInputFocus );
			inputEl.addEventListener( 'blur', onInputBlur );
		} );

		function onInputFocus( ev ) {
			classie.add( ev.target.parentNode, 'input--filled' );
		}

		function onInputBlur( ev ) {
			if( ev.target.value.trim() === '' ) {
				classie.remove( ev.target.parentNode, 'input--filled' );
			}
		}
	})();

});