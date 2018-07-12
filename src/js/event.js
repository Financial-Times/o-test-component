/**
 * Throws things to test JSDoc events.
 * http://usejsdoc.org/tags-event.html
 */
function Hurl() {

}

/**
 * Throw a snowball.
 *
 * @fires Hurl#snowball
 */
Hurl.prototype.snowball = function () {
    /**
     * Snowball event.
     *
     * @event Hurl#snowball
     * @type {object}
     * @property {boolean} detail.isPacked - Indicates whether the snowball is tightly packed.
     */
    this.dispatchEvent(new CustomEvent('snowball', {
        detail: {
            isPacked: this._snowball.isPacked
        }
    }));
};


module.exports = Hurl;
