<script>
    $(function(){
        pinurl = 'http://blog.buildabear.com/';

        $('.moduleRSS .title a').addClass('pinTitle');
        // $('.moduleRSS .description a:first-child').addClass('pinLink');
        pinImg = $('.moduleRSS .imageWrapper img').addClass('pinImg');

        $('.item', '#mod_rss').each(function(){
            if (pinImg.length > 0) {
                img = '//tabs.buddymedia.com' + $(this).find('.pinImg').attr('src');
            } else {
                img = '//d3hok70xjqsuiy.cloudfront.net/assets/prod/23047/btnpin_1339008519.png'
            }

            title = $(this).find('.pinTitle').text();

            var newHref = 'http://pinterest.com/pin/create/button/?url='
                + pinurl
                + '&media='
                + img
                + '&description='
                + title;
            var newLink = $('<a />').attr({
                'href': newHref,
                'class': 'pin-it-button',
                'count-layout': 'horizontal',
                'target': '_blank'
            });
            newLink.html('<img border="0" src="//d3hok70xjqsuiy.cloudfront.net/assets/prod/23047/btnpin_1339008519.png" title="Pin It">');

            $(this)
                .find('.shareContainer')
                .append(newLink);
        });

        // $('.moduleRSS .pinLink')
        //     .attr('href', function(index, href) {
        //         return 'http://www.pinterest.com'
        //         + href;
        // });

    });
</script>
