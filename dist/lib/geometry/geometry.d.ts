import { IFace } from "./face";
import { Object3D } from "./object3d";
import { Vector3 } from "../math/vector";
export declare class Geometry extends Object3D {
    vertices: Vector3[];
    faces: IFace[];
    constructor(vertices: Vector3[], faces: IFace[]);
}
//# sourceMappingURL=geometry.d.ts.map