import { MegaminxTop } from "./../puzzles/megaminxTop";
import { RubiksCubeTopLayer } from "./../puzzles/rubiksCube/rubiksCubeTop";
import { Square1Net } from "./../puzzles/square1/square1Net";
import { Square1Simualtor } from "./../simulator/square1/square1Simulator";
import { Square1 } from "./../puzzles/square1/square1";
import { SkewbNet } from "./../puzzles/skewbNet";
import { SkewbSimulator } from "./../simulator/skewb/skewbSimulator";
import { Skewb } from "./../puzzles/skewb";
import { PyraminxSimulator } from "./../simulator/pyraminx/pyraminxSimulator";
import { PyraminxNet } from "./../puzzles/pyraminxNet";
import { MegaminxNet } from "./../puzzles/megaminxNet";
import { Megaminx } from "./../puzzles/megaminx";
import { MegaminxSimulator } from "./../simulator/megaminx/megaminxSimulator";
import { RubiksCubeNet } from "./../puzzles/rubiksCube/rubiksCubeNet";
import { RubiksCube } from "../puzzles/rubiksCube/rubiksCube";
import { RubiksCubeSimulator } from "../simulator/rubiksCube/rubiksCubeSimulator";
import { CubeOptions, MegaminxOptions, PyraminxOptions, SkewbOptions, Square1Options } from "./interface";
import { Pyraminx } from "../puzzles/pyraminx";
import { PuzzleGeometry } from "../puzzles/puzzleGeometry";
import { VisualizerType } from "./enum";
import { PuzzleOptions } from "./interface";
/**
 * Creates puzzle geometry for a given puzzle type.
 * Will initialize the geometry on puzzle options
 * passed in
 *
 * @param type Type of the puzzle {@link VisualizerType} (cube, skewb, etc...)
 * @param options  Puzzle options {@link PuzzleOptions}
 */
export declare function getPuzzleGeometry<T extends PuzzleOptions>(type: VisualizerType, options: T): PuzzleGeometry;
/**
 * Returns a puzzle simulator for the type of puzzle
 *
 * @param type
 * @param options
 */
export declare function getPuzzleSimulator<T extends PuzzleOptions>(type: VisualizerType, options: T): RubiksCubeSimulator | MegaminxSimulator | PyraminxSimulator | SkewbSimulator | Square1Simualtor;
export declare function createCube(options?: CubeOptions): RubiksCube;
export declare function createCubeNet(options?: CubeOptions): RubiksCubeNet;
export declare function createCubeTop(options?: CubeOptions): RubiksCubeTopLayer;
export declare function createMegaminx(options?: MegaminxOptions): Megaminx;
export declare function createMegaminxNet(options?: MegaminxOptions): MegaminxNet;
export declare function createMegaminxTop(options?: MegaminxOptions): MegaminxTop;
export declare function createPyraminx(options?: PyraminxOptions): Pyraminx;
export declare function createPyraminxNet(options?: PyraminxOptions): PyraminxNet;
export declare function createSkewb(options?: SkewbOptions): Skewb;
export declare function createSkewbNet(options?: SkewbOptions): SkewbNet;
export declare function createSquare1(options?: Square1Options): Square1;
export declare function createSquare1Net(options?: Square1Options): Square1Net;
//# sourceMappingURL=puzzleCreator.d.ts.map