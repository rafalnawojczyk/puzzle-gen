import { Turn } from "./../../algorithms/algorithm";
import { Simulator } from "./../simulator";
/**
 * Simulator to define megaminx type puzzles
 *
 * Currently only standard megaminx size supported.
 */
export declare class MegaminxSimulator extends Simulator {
    constructor();
    U(reverse?: boolean): void;
    R(reverse?: boolean): void;
    F(reverse?: boolean): void;
    dr(reverse?: boolean): void;
    dl(reverse?: boolean): void;
    L(reverse?: boolean): void;
    d(reverse?: boolean): void;
    br(reverse?: boolean): void;
    BR(reverse?: boolean): void;
    BL(reverse?: boolean): void;
    bl(reverse?: boolean): void;
    b(reverse?: boolean): void;
    /**
     * D++ for Pochmann notation. D-- if reverse = false
     */
    Dxx(reverse?: boolean): void;
    /**
     * R++ for Pochmann notation. R-- if reverse = false
     */
    Rxx(reverse?: boolean): void;
    /**
     * Parses and executes a megaminx algorithm using WCA standard notation
     *
     * @see https://www.stefan-pochmann.info/spocc/other_stuff/tools/scramble_megaminx/)
     * @see https://www.worldcubeassociation.org/regulations/#12d
     *
     * @param alg megaminx algorithm to parse
     * @example
     * ```
     * R-- D++ R++ U'
     * ```
     */
    alg(alg: string): void;
    case(alg: string): void;
    doTurns(turns: Turn[]): void;
}
//# sourceMappingURL=megaminxSimulator.d.ts.map