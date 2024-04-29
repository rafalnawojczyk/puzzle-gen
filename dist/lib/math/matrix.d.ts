/**
 * Credit to logic https://github.com/toji/gl-matrix/blob/master/src/mat4.js
 */
import { Quaternion } from "./quaternion";
export declare class Matrix4 {
    values: number[];
    /**
     * Returns a 4x4 matrix with the given values
     */
    static fromValues(m1: number, m2: number, m3: number, m4: number, m5: number, m6: number, m7: number, m8: number, m9: number, m10: number, m11: number, m12: number, m13: number, m14: number, m15: number, m16: number): Matrix4;
    static fromQuaternion(q: Quaternion): Matrix4;
    static fromTranslation(x: number, y: number, z: number): Matrix4;
    static fromXRotation(radians: number): Matrix4;
    static fromYRotation(radians: number): Matrix4;
    /**
     * copy values from one matrix to another
     */
    static copy(out: Matrix4, matrix: Matrix4): void;
    static multiply(out: Matrix4, a: Matrix4, b: Matrix4): Matrix4;
    /**
     * Generates a perspective projection matrix with the given bounds.
     * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
     * which matches WebGL/OpenGL's clip volume.
     * Passing null/undefined/no value for far will generate infinite projection matrix.
     *
     * @param {number} fovy Vertical field of view in radians
     * @param {number} aspect Aspect ratio. typically viewport width/height
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum, can be null or Infinity
     */
    static perspective(fovy: number, aspect: number, near: number, far: number): Matrix4;
    constructor(values?: number[]);
    translate(x: number, y: number, z: number): void;
    scale(x: number, y: number, z: number): void;
    /**
     * Rotates the matrix by the given angle around the axis (x, y, z)
     */
    rotate(radians: number, x: number, y: number, z: number): void;
    multiply(b: Matrix4): void;
}
//# sourceMappingURL=matrix.d.ts.map