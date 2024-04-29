export declare enum SIMULATOR_FACE {
    U = "U",
    R = "R",
    F = "F",
    D = "D",
    L = "L",
    B = "B"
}
export declare const CUBE_FACES: SIMULATOR_FACE[];
export declare enum CUBE_AXIS {
    X = "X",
    Y = "Y",
    Z = "Z"
}
export declare const CUBE_AXIS_FACES: {
    [axis: string]: SIMULATOR_FACE[];
};
export declare const AXIS_ORIENTATION: {
    X: {
        U: number;
        B: number;
        F: number;
        D: number;
    };
    Y: {
        B: number;
        F: number;
        L: number;
        R: number;
    };
    Z: {
        U: number;
        D: number;
        L: number;
        R: number;
    };
};
export declare const AXIS_FACE_ORIENTATION: {
    U: boolean;
    R: boolean;
    F: boolean;
    D: boolean;
    L: boolean;
    B: boolean;
};
//# sourceMappingURL=constants.d.ts.map