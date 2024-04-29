/**
 * Credit to logic https://github.com/toji/gl-matrix/blob/master/src/quat.js
 */
export declare class Quaternion {
    a: number;
    b: number;
    c: number;
    d: number;
    static fromEuler(x: number, y: number, z: number): Quaternion;
    constructor(a: number, b: number, c: number, d: number);
}
//# sourceMappingURL=quaternion.d.ts.map