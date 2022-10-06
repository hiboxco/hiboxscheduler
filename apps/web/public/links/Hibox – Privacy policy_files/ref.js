(function initReferrals() {
	$(document).ready(function() {
	    var REFERRAL_NAME = "ref";
		var LANDING_NAME = "landing";

		function createCookie(name,value) {
		    document.cookie = name + "=" + value + "; domain=hibox.co; path=/";
		}

		function readCookie(name) {
		    var nameEQ = name + "=";
		    var ca = document.cookie.split(';');
		    for(var i=0;i < ca.length;i++) {
		        var c = ca[i];
		        while (c.charAt(0)==' ') c = c.substring(1,c.length);
		        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		    }
		    return null;
		}

		var url = window.location.href;

		var referral = readCookie(REFERRAL_NAME);
		if (!referral) {
			var refPattern = /.+\/.*ref=(.+)/;

			if (refPattern.test(url)) {
				referral = refPattern.exec(url)[1];
			}

			if (!referral) {
				referral = document.referrer;

				if (!referral || referral.trim() === '') {
					referral = 'hibox.co';
				}
			}

			createCookie(REFERRAL_NAME, referral);
		}

		var landing = readCookie(LANDING_NAME);
		if (!landing) {
			landing = url;

			createCookie(LANDING_NAME, landing);
		}

		$('.quickform').submit(function(event) {
			var refInput = $(this).find('input[name="' + REFERRAL_NAME + '"]');
			if (refInput.length === 0) {
				refInput = $('<input>')
					.attr('type', 'hidden')
					.attr('name', REFERRAL_NAME);
				$(this).append(refInput);
			}
			refInput.val(referral);

			var landingInput = $(this).find('input[name="' + LANDING_NAME + '"]');
			if (landingInput.length === 0) {
				landingInput = $('<input>')
					.attr('type', 'hidden')
					.attr('name', LANDING_NAME);
				$(this).append(landingInput);
			}
			landingInput.val(landing);

			return true;
		});

		$('a').each(function() {
			var href = $(this).attr('href');
			if (href && href.indexOf('/home') > -1) {
				var first = href.indexOf('?') === -1;

				if (referral && referral.trim() !== '') {
					if (first) {
						href += '?';
						first = false
					} else {
						href += '&';
					}
					href += REFERRAL_NAME + '=' + encodeURIComponent(referral);
				}

				if (landing && landing.trim() !== '') {
					if (first) {
						href += '?';
						first = false
					} else {
						href += '&';
					}
					href += LANDING_NAME + '=' + encodeURIComponent(landing);
				}

				$(this).attr('href', href);
			}
		});
	});
})();