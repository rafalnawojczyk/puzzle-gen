import { Vector3 } from "../math/vector";
import { IColor } from "./color";
export interface IFace {
    indices: number[];
    centroid: Vector3;
    color?: IColor;
    uid: number;
}
/**
 * Face that will render as a puzzle sticker
 */
export declare class Face implements IFace {
    indices: number[];
    color?: IColor;
    centroid: Vector3;
    uid: number;
    /**
     * @param indices indices of vertices that make up a face
     * @param vertices vertices of the geometry to calculate centroid from
     * @param color color of the sticker
     */
    constructor(indices: number[], vertices: Vector3[], color?: IColor);
    /**
     * recalculate the centroid of the face.
     */
    calculateCentroid(vertices: Vector3[]): void;
}
//# sourceMappingURL=face.d.ts.map