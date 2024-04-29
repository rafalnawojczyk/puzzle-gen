import { IColor } from "./color";
import { Vector3 } from "../math/vector";
import { Matrix4 } from "../math/matrix";
export declare class Object3D {
    matrix: Matrix4;
    uid: number;
    color?: IColor;
    centroid: Vector3;
    constructor();
    translate(x: number, y: number, z: number): void;
    rotate(rad: number, x: number, y: number, z: number): void;
    scale(x: number, y: number, z: number): void;
    setColor(color: IColor): void;
}
//# sourceMappingURL=object3d.d.ts.map