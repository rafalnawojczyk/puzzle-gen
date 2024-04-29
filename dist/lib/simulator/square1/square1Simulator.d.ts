import { IColor } from "./../../geometry/color";
import { Simulator } from "./../simulator";
import { Sqaure1Piece } from "./../../puzzles/square1/interface";
export type Square1Move = Square1Turns | Square1Slice;
export type Square1Slice = {
    slice: boolean;
};
export interface Square1Turns {
    top: number;
    bottom: number;
}
export declare class Square1Simualtor extends Simulator {
    topLayer: Sqaure1Piece[];
    bottomLayer: Sqaure1Piece[];
    middleRotated: boolean;
    private scheme;
    constructor(scheme?: {
        [face: string]: IColor;
    });
    alg(alg: string): void;
    case(alg: string): void;
    slice(): void;
    rotateTop(turns: number): void;
    rotateBottom(turns: number): void;
}
//# sourceMappingURL=square1Simulator.d.ts.map