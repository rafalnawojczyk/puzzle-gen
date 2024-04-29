import { Turn } from "../../algorithms/algorithm";
import { Simulator } from "./../simulator";
/**
 * Simulates a standard skewb
 *
 * Imagine the faces like this
 * ```
 *      U
 *    L F R B
 *      D
 * ```
 *
 * each face has 5 sickers (1 center, 4 corners), stored as
 * an array. Each index of the array maps to stickers like
 * so, 0 being the center, 1-4 being the corners from top left
 * to bottom right
 * ```
 *      1   2
 *        0
 *      3   4
 * ```
 *
 * So all together the simulator stores information like
 * this
 * ```
 *          U1    U2
 *             U0
 *          U3    U4
 * L1    L2 F1    F2 R1    R2 B1    B2
 *    L0       F0       R0       B0
 * L3    L4 F3    F4 F3    F4 B3    B4
 *          D1    D2
 *             D0
 *          D3    D4
 * ```
 */
export declare class SkewbSimulator extends Simulator {
    constructor();
    R(reverse?: boolean): void;
    U(reverse?: boolean): void;
    L(reverse?: boolean): void;
    B(reverse?: boolean): void;
    alg(alg: string): void;
    case(alg: string): void;
    doTurns(turns: Turn[]): void;
}
//# sourceMappingURL=skewbSimulator.d.ts.map