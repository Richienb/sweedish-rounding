/**
 * Round a number using Sweedish rounding.
 * @param number The number to round.
 * @example
 * ```
 * const sweedishRounding = require("sweedish-rounding");
 *
 * sweedishRounding(0.49);
 * //=> 0.5
 * ```
*/
declare function sweedishRounding(number: number): number;

export = sweedishRounding;
