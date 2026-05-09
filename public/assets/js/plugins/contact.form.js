/**
 *
 * -----------------------------------------------------------------------------
 *
 * Template : Virtuo Personal Portfolio HTML Template
 * Author : themes-park
 * Author URI : https://themes-park.com/ 
 *
 * -----------------------------------------------------------------------------
 *
 **/

(function ($) {
    'use strict';
    var form = $('#contact-form');
    var formMessages = $('#form-messages');

    $(form).submit(function (e) {
        e.preventDefault();

        var formData = $(form).serialize();

        $.ajax({
                type: 'POST',
                url: '/',
                data: formData,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .done(function () {
                $(formMessages).removeClass('error').addClass('success');
                $(formMessages).text('Thank you! Your message has been sent.');
                $('#contact-name, #contact-email, #contact-phone, #subject, #contact-message').val('');
            })
            .fail(function () {
                $(formMessages).removeClass('success').addClass('error');
                $(formMessages).text('Oops! Something went wrong. Please try again.');
            });
    });

})(jQuery);