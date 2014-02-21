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
