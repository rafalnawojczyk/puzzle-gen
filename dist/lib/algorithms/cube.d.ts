import { Turn } from "./algorithm";
export declare enum CubeAlgorithmUnit {
    F = "F",
    U = "U",
    R = "R",
    L = "L",
    D = "D",
    B = "B",
    M = "M",
    E = "E",
    S = "S",
    X = "x",
    Y = "y",
    Z = "z"
}
export declare const possibleMoves: string[];
/**
 * Takes in an algorithm string and parses the turns from it
 * algorithm string format should be moves separated by a single space
 * (ex. "U R2 L' x")
 *
 * https://www.worldcubeassociation.org/regulations/#article-12-notation
 */
export declare function parseCubeAlgorithm(algorithm: string): Turn[];
//# sourceMappingURL=cube.d.ts.map