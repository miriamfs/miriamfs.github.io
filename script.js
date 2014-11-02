(function ($) {
    $(function() {
        console.log('yes');
        var offset = 80;

        $('body').scrollspy({ target: '#navbar', offset: offset });

        $('#navbar').find('li a').click(function(event) {
            event.preventDefault();
            $($(this).attr('href'))[0].scrollIntoView();
            scrollBy(0, -offset);
        });
    });
}(jQuery));