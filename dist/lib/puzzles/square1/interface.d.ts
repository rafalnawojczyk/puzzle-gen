import { Object3D } from "./../../geometry/object3d";
import { Group } from "./../../geometry/group";
import { Geometry } from "./../../geometry/geometry";
import { PIECE_TYPE } from "./enum";
import { IColor } from "./../../geometry/color";
import { ColorScheme } from "../../visualizer";
export interface Sqaure1Piece {
    type: PIECE_TYPE;
    colors: IColor[];
}
export declare abstract class Square1Builder {
    pieces: Object3D[];
    group: Group;
    faces: {
        [face: string]: Group;
    };
    protected sideLength: number;
    protected halfSide: number;
    protected halfEdgePiece: number;
    protected layerWidth: number;
    protected middleWidth: number;
    protected halfMiddleWidth: number;
    protected borderLayerWidth: number;
    protected outerHalfSide: number;
    protected outerHalfEdgePiece: number;
    protected scheme: ColorScheme;
    constructor(topLayer?: Sqaure1Piece[], bottomLayer?: Sqaure1Piece[], middleRotated?: boolean, scheme?: ColorScheme, sideLength?: number);
    abstract square1Corner(top: IColor, side1: IColor, side2: IColor): Geometry;
    abstract square1Edge(top: IColor, side: IColor): Geometry;
    abstract buildSquare1(topLayer: Sqaure1Piece[], bottomLayer: Sqaure1Piece[], middleRotated: boolean): Object3D[];
    protected makeLayer(pieces: Sqaure1Piece[]): Geometry[];
    /**
     * Not implemented. Just here for {@link Visualizer}'s sake
     */
    setColors(colors: {
        [face: string]: IColor[];
    }): void;
}
//# sourceMappingURL=interface.d.ts.map