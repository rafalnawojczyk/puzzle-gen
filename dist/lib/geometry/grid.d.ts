import { Geometry } from "./geometry";
import { IColor } from "./color";
/**
 * Makes a (size*size) grid of colored planes for the
 * rubiks cube stickers. Indexed from the top
 * left to bottom right. See Below
 *
 * ```
 *    0 1 2
 *    3 4 5
 *    6 7 8
 * ```
 *
 * @param length length of the grid
 * @param size number of elements to segment grid into
 * @param color
 */
export declare function makeGrid(length: number, size: number, color: IColor): Geometry[];
/**
 * Makes a row of planes for the rubiks cube stickers.
 * indexed from left to right
 *
 *     0 1 2
 *
 * @param length length of the row horizontally
 * @param size number of elements to segment row into
 * @param color color
 * @param vOffset vertical offset. places vertices of row vertically offset by this amount from x axis
 */
export declare function makeRow(length: number, size: number, color: IColor, vOffset?: number): Geometry[];
//# sourceMappingURL=grid.d.ts.map