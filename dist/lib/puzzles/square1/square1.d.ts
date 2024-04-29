import { Object3D } from "./../../geometry/object3d";
import { Sqaure1Piece, Square1Builder } from "./interface";
import { Geometry } from "./../../geometry/geometry";
import { IColor } from "./../../geometry/color";
import { ColorScheme } from "../../visualizer";
export declare class Square1 extends Square1Builder {
    constructor(topLayer?: Sqaure1Piece[], bottomLayer?: Sqaure1Piece[], middleRotated?: boolean, scheme?: ColorScheme, sideLength?: number);
    square1Corner(top: IColor, side1: IColor, side2: IColor): Geometry;
    square1Edge(top: IColor, side: IColor): Geometry;
    square1Middle(front: IColor, side: IColor, back: IColor): Geometry;
    buildSquare1(top: Sqaure1Piece[], bottom: Sqaure1Piece[], middleRotated: boolean): Object3D[];
}
//# sourceMappingURL=square1.d.ts.map