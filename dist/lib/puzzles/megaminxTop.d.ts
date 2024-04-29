import { IColor } from "./../geometry/color";
import { DividedPentagon } from "./../geometry/dividedPentagon";
import { Group } from "../geometry/group";
export declare class MegaminxTop {
    group: Group;
    faces: {
        [face: string]: DividedPentagon;
    };
    private U;
    private R;
    private F;
    private BR;
    private BL;
    private L;
    constructor();
    private createFaces;
    setColors(colors: {
        [face: string]: IColor[];
    }): void;
    private setFaceColors;
    /**
     * hide stickers that aren't in the top layer
     * so only the top of the megaminx is shown
     */
    private removeHiddenStickers;
}
//# sourceMappingURL=megaminxTop.d.ts.map