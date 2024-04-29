import { Geometry } from "./geometry";
import { IColor } from "./color";
import { Vector3 } from "../math/vector";
export declare class Triangle extends Geometry {
    constructor(a: Vector3, b: Vector3, c: Vector3, color: IColor);
}
export declare class EquilateralTriangle extends Triangle {
    constructor(base: number, color: IColor);
}
//# sourceMappingURL=triangle.d.ts.map