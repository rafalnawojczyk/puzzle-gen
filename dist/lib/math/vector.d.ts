/**
 * Credit to logic https://github.com/toji/gl-matrix/blob/master/src/vec3.js
 */
import { Matrix4 } from "./matrix";
export declare class Vector3 {
    x: number;
    y: number;
    z: number;
    static fromValues(x: number, y: number, z: number): Vector3;
    constructor(x: number, y: number, z: number);
    transformMat4(m: Matrix4): void;
    multiply(x: number, y: number, z: number): void;
    rotateX(origin: Vector3, radians: number): this;
    rotateZ(origin: Vector3, radians: number): this;
    clone(): Vector3;
}
export declare class Vector2 {
    x: number;
    y: number;
    static fromValues(x: number, y: number): Vector2;
    constructor(x: number, y: number);
}
//# sourceMappingURL=vector.d.ts.map