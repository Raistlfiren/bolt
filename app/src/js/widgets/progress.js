/**
 * See (http://jquery.com/).
 * @name jQuery
 * @class
 * See the jQuery Library  (http://jquery.com/) for full details. This just
 * documents the function and classes that are added to jQuery by this plug-in.
 */

/**
 * See (http://jquery.com/)
 * @name widget
 * @class
 * See the jQuery Library  (http://jquery.com/) for full details. This just
 * documents the function and classes that are added to jQuery by this plug-in.
 * @memberOf jQuery
 */

/**
 * See (http://jquery.com/)
 * @name bolt
 * @class
 * @memberOf jQuery.widget
 * @param {object} $ - Global jQuery object
 * @param {object} bolt - Global Bolt object
 */
(function ($, bolt) {
    /**
     * Bolt progress bars.
     *
     * @class progress
     * @memberOf jQuery.widget.bolt
     * @license http://opensource.org/licenses/mit-license.php MIT License
     * @author rarila
     */
    $.widget('bolt.progress', /** @lends jQuery.widget.bolt.progress */ {
        /**
         * The constructor of the progress widget.
         *
         * @private
         */
        _create: function () {
            // Private properties
            this.bars = {};

            this.element.addClass('buic-progress');
        },

        /**
         * Set the value of progress bar.
         *
         * @private
         * @param {integer} id - The id of the progress bar to set
         * @param {float} value - A value between 0 and 1.0
         */
        _set: function(id, value) {
            value = parseFloat(value);
            value = isNaN(value) ? 0 : Math.min(100, Math.max(0, Math.round(value * 100)));

            if (this.bars[id]) {
                this.bars[id]
                    .find('.progress-bar')
                    .attr('aria-valuenow', value)
                    .css('width', value + '%');
            }
        },

        /**
         * Adds a new progress bar to the progress widget, if one with the id doesn't already exists.
         *
         * @param {string} id - The progress bar id
         * @param {float} value - A value between 0 and 1.0
         * @param {string} [label] - The label. If not given the id is used as Label.
         */
        add: function (id, value, label) {
            var barTemplate = bolt.data('buic.progress.bar');

            if (!this.bars[id]) {
                // Create the new bar from the template.
                this.bars[id] = $(barTemplate);

                // Set its label.
                this.bars[id]
                    .attr('data-label', label || id)
                    .find('.progress-bar')
                    .text(label || id);

                // Set the value of the bar.
                this._set(id, value);

                // Add the new bar to the container and show the container.
                this.element
                    .append(this.bars[id])
                    .show();

                // Show the new bar.
                this.bars[id].show(300);
            }
        }
    });
})(jQuery, Bolt);
