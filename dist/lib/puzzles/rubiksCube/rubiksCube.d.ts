import { IColor } from "./../../geometry/color";
import { Group } from "../../geometry/group";
import { Object3D } from "../../geometry/object3d";
export declare class RubiksCube {
    stickers: Object3D[];
    group: Group;
    faces: {
        [face: string]: Group;
    };
    private size;
    private U;
    private R;
    private F;
    private D;
    private L;
    private B;
    constructor(size: number);
    private setFaceColors;
    setColors(colors: {
        [face: string]: IColor[];
    }): void;
}
//# sourceMappingURL=rubiksCube.d.ts.map