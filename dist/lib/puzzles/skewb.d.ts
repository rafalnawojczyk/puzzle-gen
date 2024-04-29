import { Object3D } from "./../geometry/object3d";
import { Group } from "../geometry/group";
import { IColor } from "../geometry/color";
export declare class Skewb {
    stickers: Object3D[];
    group: Group;
    faces: {
        [face: string]: Group;
    };
    private U;
    private R;
    private F;
    private D;
    private L;
    private B;
    constructor();
    private makeStickers;
    setColors(colors: {
        [face: string]: IColor[];
    }): void;
    private setFaceColors;
}
//# sourceMappingURL=skewb.d.ts.map