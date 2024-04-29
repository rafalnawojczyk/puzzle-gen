import { IColor } from "./../geometry/color";
import { TriangleLattice } from "./../geometry/triangleLattice";
import { Group } from "./../geometry/group";
export declare class PyraminxNet {
    faces: {
        [face: string]: TriangleLattice;
    };
    group: Group;
    private size;
    private L;
    private R;
    private U;
    private B;
    constructor(size: number, sideLength?: number);
    setColors(colors: {
        [face: string]: IColor[];
    }): void;
    private setFaceColors;
}
//# sourceMappingURL=pyraminxNet.d.ts.map