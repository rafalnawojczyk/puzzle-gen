import { Object3D } from "./object3d";
import { Vector3 } from "../math/vector";
export declare class Group extends Object3D {
    objects: Object3D[];
    constructor(objects?: Object3D[]);
    setObjects(objects: Object3D[]): void;
    addObject(object: Object3D): void;
    setCentroid(vector: Vector3): void;
}
//# sourceMappingURL=group.d.ts.map