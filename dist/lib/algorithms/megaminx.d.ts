import { Turn } from "./algorithm";
/**
 * Takes in a megaminx algorithm in stefan pochmann notation as a string
 * and parses the turns from it
 *
 * Also supports face turns U,F,R,L,BR,BL as i've seen in some algorithms online
 *
 * algorithm string format should be moves separated by a single space
 *
 * @example
 * ```typescript
 * parseMegaminxAlgorithm("D++ R-- D-- U")
 * parseMegaminxAlgorithm("R' U2' R2 U R2' U R2 U2' R'")
 * ```
 *
 * @see https://www.worldcubeassociation.org/regulations/#article-12-notation
 */
export declare function parseMegaminxAlgorithm(algorithm: string): Turn[];
//# sourceMappingURL=megaminx.d.ts.map