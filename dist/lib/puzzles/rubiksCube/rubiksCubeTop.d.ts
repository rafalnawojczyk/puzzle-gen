import { IColor } from "./../../geometry/color";
import { Group } from "./../../geometry/group";
import { Object3D } from "./../../geometry/object3d";
export declare class RubiksCubeTopLayer {
    stickers: Object3D[];
    group: Group;
    faces: {
        [face: string]: Group;
    };
    private size;
    private stickerWidth;
    private halfStickerWidth;
    private cubeWidth;
    private halfCubeWidth;
    private U;
    private R;
    private F;
    private L;
    private B;
    constructor(size: number, rotationAngle?: number);
    private setFaceColors;
    setColors(colors: {
        [face: string]: IColor[];
    }): void;
    /**
     * given a row of stickers centered at 0,0,0
     * rotates each vertex of each sticker around
     * the top of the sticker.
     */
    private rotateBorder;
}
//# sourceMappingURL=rubiksCubeTop.d.ts.map