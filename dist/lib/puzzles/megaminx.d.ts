import { IColor } from "./../geometry/color";
import { Group } from "./../geometry/group";
import { Object3D } from "./../geometry/object3d";
import { DividedPentagon } from "../geometry/dividedPentagon";
export declare class Megaminx {
    stickers: Object3D[];
    group: Group;
    faces: {
        [face: string]: DividedPentagon;
    };
    private layers;
    private U;
    private R;
    private F;
    private dr;
    private dl;
    private L;
    private d;
    private br;
    private BR;
    private BL;
    private bl;
    private b;
    constructor(layers?: number);
    setColors(colors: {
        [face: string]: IColor[];
    }): void;
    private setFaceColors;
}
//# sourceMappingURL=megaminx.d.ts.map