/** @namespace window */

/**
 * Alertnate for the alert function.
 * Example of a namespace tag http://usejsdoc.org/tags-namespace.html
 * @param {string} msg - Message to show in an alert dialogue.
 */
window["!"] = function (msg) { alert(msg); }; // eslint-disable-line no-alert
