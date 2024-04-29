import { Geometry } from "./../geometry/geometry";
import { IColor } from "./../geometry/color";
import { Group } from "./../geometry/group";
export declare class MegaminxNet {
    faces: {
        [face: string]: Geometry;
    };
    group: Group;
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
    constructor(layers: number);
    setColors(colors: {
        [face: string]: IColor[];
    }): void;
    oldSetColors(colors: IColor[]): void;
    private setFaceColors;
}
//# sourceMappingURL=megaminxNet.d.ts.map