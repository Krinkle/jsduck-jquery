/*!
 * jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document
 * traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use
 * API that works across a multitude of browsers. With a combination of versatility and
 * extensibility, jQuery has changed the way that millions of people write JavaScript.
 *
 * <http://jquery.com/>
 */

/**
 * @class jQuery
 * @alternateClassName $
 *
 * Return a collection of matched elements either found in the DOM based on passed argument(s) or
 * created by passing an HTML string.
 *
 * <http://api.jquery.com/jQuery/>
 *
 * @constructor
 * @param {string|HTMLElement|Array|Object} [selector]
 * @param {HTMLDocument} [ownerDocument] A document by which a string of HTML will be interpreted.
 */

/**
 * @class jqXHR
 * @mixins jQuery.Promise
 *
 * As of jQuery 1.5, the $.ajax() method returns the jqXHR object, which is a superset of the
 * XMLHTTPRequest object.
 *
 * <http://api.jquery.com/Types/#jqXHR>
 */

/**
 * @class jQuery.Promise
 *
 * This object provides a subset of the methods of the jQuery.Deferred object
 * ({@link jQuery.Deferred#then then}, {@link jQuery.Deferred#done done},
 * {@link jQuery.Deferred#fail fail}, {@link jQuery.Deferred#always always},
 * {@link jQuery.Deferred#pipe pipe}, and {@link jQuery.Deferred#state state}) to prevent users
 * from changing the state of the Deferred.
 *
 * <http://api.jquery.com/Types/#Promise>
 */

/**
 * @method add
 * @member jQuery
 *
 * Add elements to the set of matched elements.
 *
 * <http://api.jquery.com/add/>
 *
 * @param {string|HTMLElement|jQuery} add Elements to add
 * @chainable
 */

/**
 * @method attr
 * @member jQuery
 *
 * Get the value of an attribute for the first element in the set of matched elements or set one or
 * more attributes for every matched element.
 *
 * <http://api.jquery.com/attr/>
 *
 * @param {string|Object} attributeName The name of the attribute to get. Or, an object of
 *  attribute-value pairs to set.
 * @param {string|Function} [value] A value to set for the attribute. Or, a function returning the
 *  value to set.
 * @param {string} [value.index] The index position of the element in the set.
 * @param {string} [value.oldValue] The old attribute value.
 * @returns {string|jQuery}
 */

/**
 * @method add
 * @member jQuery.Callbacks
 *
 * Add a callback or a collection of callbacks to a callback list.
 *
 * <http://api.jquery.com/callbacks.add/>
 *
 * @param {Function|Array} callbacks A function, or array of functions, that are to be added to the callback list.
 * @chainable
 */

/**
 * @method has
 * @member jQuery.Callbacks
 *
 * Determine whether a supplied callback is in a list
 *
 * <http://api.jquery.com/callbacks.has/>
 *
 * @param {Function} callback The callback to search for.
 * @returns {boolean}
 */

/**
 * @method done
 * @member jQuery.Promise
 *
 * Add handlers to be called when the Deferred object is resolved.
 *
 * <http://api.jquery.com/deferred.done/>
 *
 * @param {Function...} doneCallbacks A function, or array of functions, that are called when the Deferred is resolved.
 * @chainable
 */

/**
 * @method then
 * @member jQuery.Promise
 *
 * <http://api.jquery.com/deferred.then/>
 *
 * @chainable
 */

/**
 * @class jQuery.Callbacks
 *
 * A multi-purpose callbacks list object that provides a powerful way to manage callback lists.
 *
 * <http://api.jquery.com/jQuery.Callbacks/>
 *
 * @constructor
 *
 * The jQuery.Callbacks() constructor creates a instance. The `new` operator is optional.
 *
 * @param {string} flags An optional list of space-separated flags that change how the callback list behaves.
 */

/**
 * @class jQuery.Deferred
 * @mixins jQuery.Promise
 *
 * A constructor function that returns a chainable utility object with methods to register multiple
 * callbacks into callback queues, invoke callback queues, and relay the success or failure state
 * of any synchronous or asynchronous function.
 *
 * <http://api.jquery.com/jQuery.Deferred/>
 *
 * @constructor
 *
 * The jQuery.Deferred() constructor creates a new Deferred object. The `new` operator is optional.
 *
 * @param {Function} [beforeStart] A function that is called just before the constructor returns.
 * @param {jQuery.Deferred} beforeStart.deferred The constructed deferred object.
 */

/**
 * @static
 * @method ajax
 * @member jQuery
 *
 * Perform an asynchronous HTTP (Ajax) request.
 *
 * <http://api.jquery.com/jQuery.ajax/>
 *
 * @param {string} [url] A string containing the URL to which the request is sent.
 * @param {Object} [settings] A set of key/value pairs that configure the Ajax request. All
 *  settings are optional. A default can be set for any option with $.ajaxSetup().
 * @returns {jqXHR}
 */

/**
 * @static
 * @method ajaxSetup
 * @member jQuery
 *
 * Set default values for future Ajax requests. Its use is not recommended.
 *
 * <http://api.jquery.com/jQuery.ajaxSetup/>
 *
 * @param {Object} settings A set of key/value pairs that configure the default Ajax request. All options are optional.
 */
