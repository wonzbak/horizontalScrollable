/**
 * Horizontal scrollable jQuery plugin.
 *
 * License: The MIT License (https://opensource.org/licenses/MIT).
 */
(function ( $ ) {
    $.fn.horizontalScrollable = function() {
        return this.each(function() {
            $this = $(this);
            $this.attr('unselectable','on')
                 .css({'-moz-user-select':'none',
                       '-o-user-select':'none',
                       '-khtml-user-select':'none', /* you could also put this in a class */
                       '-webkit-user-select':'none',/* and add the CSS class here instead */
                       '-ms-user-select':'none',
                       'user-select':'none'
                 }).bind('selectstart', function(){ return false; });

            var isMouseDown            = false;
            var pageX                  = 0;
            var originalScrollPosition = 0;
            var that                   = $this;

            $this.on('mousedown', function (e) {
                isMouseDown = true;
                pageX = e.pageX;
                that.css('cursor', 'move');
                originalScrollLeft = that.scrollLeft();
            }).on('mouseup', function(e) {
                isMouseDown = false;
                that.css('cursor', 'default');
            }).on('mousemove', function(e) {
                if (isMouseDown) {
                    var diff = pageX - e.pageX;
                    that.scrollLeft(originalScrollLeft + diff);
                }
            });
        });
    };
})(jQuery);

