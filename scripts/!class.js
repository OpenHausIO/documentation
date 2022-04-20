/**
 * @description
 * Description may go
 * over multiple lines followed by @tags<br />
 * This is awesome, and greate for generating<br />
 * custm markdown files which integrate into docsify
 * 
 * @class BASE
 * @extends FOO [link to class](asdfasdfasdf)
 * 
 * @property {String} name the name parameter
 * @property {Number} [value=10] the value parameter
 *
 * @emits error While initazilzine failed
 * @emits ready When component is ready to use
 *
 */
class BASE {

    constructor(name, value) {
        this.name = name;
        this.value = value || 10;
    }


    /**
     * @function add 
     * Calculate the summ of two numbers <a> & <b>
     * Does this get checked? Yes it does!
     * @param {Number} a Number to add to <b>
     * @param {Number} b Number to add to <a>
     * @returns {Number} Sum of a & b
     * 
     * @example
     * ```js
     * add(1, 2); // returns 3
     * ```
     * 
     * @example
     * ```js
     * const sum = add(1, 5);
     * console.log(sum); // display
     * ```
     */
    add(a, b) {
        return a + b;
    }


    /**
     * @function multiply 
     * multiplay two numbers <a> & <b>
     * 
     * @param {Number} a Number to add to <b>
     * @param {Number} b Number to add to <a>
     * 
     * @returns {Number} x of a & b
     * 
     * @example
     * ```js
     * multiply(1, 2); // returns 2
     * ```
     * 
     * @example
     * ```js
     * const sum = add(1, 5);
     * console.log(sum); // display
     * ```
     */
    multiplay(a, b) {
        return a + b;
    }


    /**
     * @function schema
     * Hidden function inerhieted
     * 
     * @static
     * 
     * @param {String} ObjectID as string
     * @param {Object} Schema input [linkt to](http://google.com)
     * 
     * @returns {Object} [`Object`](https://joi.dev/api/?v=17.6.0#anyvalidatevalue-options) Joi validation result
     */
    static schema() {

    }

}