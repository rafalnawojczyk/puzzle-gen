import { VisualizerType } from "./enum";
import { PuzzleGeometry } from "./../puzzles/puzzleGeometry";
import { PuzzleOptions } from "./interface";
import { Renderer } from "./../rendering/renderer";
import { Scene } from "../rendering/scene";
import { Camera } from "./../rendering/camera";
import { Simulator } from "../simulator/simulator";
import { Group } from "../geometry/group";
/**
 * Encapsulates logic for setting up a puzzle environment for rendering
 * images. Sets up puzzle geometry, applies any algorithm or masking
 * if necessary, and renders the puzzle
 */
export declare class Visualizer {
    protected camera: Camera;
    protected scene: Scene;
    protected renderer: Renderer;
    protected type: VisualizerType;
    protected options: PuzzleOptions;
    group: Group;
    puzzleGeometry: PuzzleGeometry;
    simulator: Simulator;
    constructor(renderer: Renderer, type: VisualizerType, options?: PuzzleOptions);
    private applyColors;
    private applySimulatorColors;
    private applyAlgorithm;
    private applyMask;
    /**
     * build the group matrix for the puzzle. This sets up the
     * rotation, scale, and translation for the resulting rendered
     * image.
     */
    private buildGroupMatrix;
    private addArrows;
    private initPuzzleOptions;
    private applyOptionsToPuzzle;
    setPuzzleOptions(options: PuzzleOptions): void;
    render(): void;
}
//# sourceMappingURL=visualizer.d.ts.map