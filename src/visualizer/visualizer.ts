import {
  RED,
  BLUE,
  WHITE,
  ORANGE,
  GREEN,
  PINK,
  LIGHT_YELLOW,
  LIGHT_GREEN,
  PURPLE,
  DARK_BLUE,
  GREY,
  MASK_COLOR
} from "./../puzzles/colors";
import { VisualizerType } from "./enum";
import { PuzzleGeometry } from "./../puzzles/puzzleGeometry";
import {
  CubeOptions,
  SkewbOptions,
  MegaminxOptions,
  PyraminxOptions,
  Square1Options,
  PuzzleOptions,
  ColorScheme,
} from "./interface";
import { Renderer } from "./../rendering/renderer";
import { Scene } from "../rendering/scene";
import { Camera } from "./../rendering/camera";
import { Simulator, SimulatorValues } from "../simulator/simulator";
import {
  createCube,
  createCubeNet,
  createCubeTop,
  createMegaminx,
  createMegaminxNet,
  createPyraminx,
  createPyraminxNet,
  createSkewb,
  createSkewbNet,
  createSquare1,
  createSquare1Net,
} from "./puzzleCreator";
import { YELLOW } from "../puzzles/colors";
import { IColor } from "../geometry/color";

const defaultCubeOptions: CubeOptions = {
  size: 3,
  scheme: {
    U: YELLOW,
    R: RED,
    F: BLUE,
    D: WHITE,
    L: ORANGE,
    B: GREEN,
  },
};

const defaultMegaminxOptions: MegaminxOptions = {
  size: 2,
  scheme: {
    U: WHITE,
    F: RED,
    R: BLUE,
    dr: PINK,
    dl: LIGHT_YELLOW,
    L: GREEN,
    d: GREY,
    br: LIGHT_GREEN,
    BR: YELLOW,
    BL: PURPLE,
    bl: DARK_BLUE,
    b: ORANGE,
  },
};

const defaultPyraminxOptions: PyraminxOptions = {
  size: 3,
  scheme: {
    left: BLUE,
    right: GREEN,
    top: YELLOW,
    back: RED,
  },
};

const defaultSkewbOptions: SkewbOptions = {
  scheme: {
    top: YELLOW,
    front: BLUE,
    right: RED,
    back: GREEN,
    left: ORANGE,
    bottom: WHITE,
  },
};

const defaultSquare1Options: Square1Options = {};

function getDefaultOptions(type: VisualizerType): PuzzleOptions {
  switch (type) {
    case VisualizerType.CUBE:
    case VisualizerType.CUBE_NET:
    case VisualizerType.CUBE_TOP:
      return defaultCubeOptions;
    case VisualizerType.MEGAMINX:
    case VisualizerType.MEGAMINX_NET:
      return defaultMegaminxOptions;
    case VisualizerType.PYRAMINX:
    case VisualizerType.PYRAMINX_NET:
      return defaultPyraminxOptions;
    case VisualizerType.SKEWB:
    case VisualizerType.SKEWB_NET:
      return defaultSkewbOptions;
    case VisualizerType.SQUARE1:
    case VisualizerType.SQUARE1_NET:
      return defaultSquare1Options;
    default:
      throw new Error(`Could not get default options for puzzle ${type}`);
  }
}

/**
 * Applies a color scheme to simulator values
 *
 * @param faceValues face values from the simulator
 * @param scheme color scheme to
 */
function applyColorScheme(
  faceValues: SimulatorValues,
  scheme: ColorScheme
): { [face: string]: IColor[] } {
  return Object.keys(faceValues).reduce((colors, face) => {
    colors[face] = faceValues[face].map((value) => scheme[value] || MASK_COLOR);
    return colors;
  }, {});
}

/**
 * Creates puzzle geometry and and simulator for a given puzzle type.
 * Will initialize the geometry and simulator based on puzzle options
 * passed in
 *
 * @param type Type of the puzzle {@link VisualizerType} (cube, skewb, etc...)
 * @param options  Puzzle options {@link PuzzleOptions}
 */
function puzzleFactory<T extends PuzzleOptions>(
  type: VisualizerType,
  options: T
): [PuzzleGeometry, Simulator] {
  switch (type) {
    case VisualizerType.CUBE:
      return createCube(options as CubeOptions);
    case VisualizerType.CUBE_NET:
      return createCubeNet(options as CubeOptions);
    case VisualizerType.CUBE_TOP:
      return createCubeTop(options as CubeOptions);
    case VisualizerType.MEGAMINX:
      return createMegaminx(options as MegaminxOptions);
    case VisualizerType.MEGAMINX_NET:
      return createMegaminxNet(options as MegaminxOptions);
    case VisualizerType.PYRAMINX:
      return createPyraminx(options as PyraminxOptions);
    case VisualizerType.PYRAMINX_NET:
      return createPyraminxNet(options as PyraminxOptions);
    case VisualizerType.SKEWB:
      return createSkewb(options as SkewbOptions);
    case VisualizerType.SKEWB_NET:
      return createSkewbNet(options as SkewbOptions);
    case VisualizerType.SQUARE1:
      return createSquare1(options as Square1Options);
    case VisualizerType.SQUARE1_NET:
      return createSquare1Net(options as Square1Options);
  }
}

function isSquare1(type: VisualizerType) {
  return type === VisualizerType.SQUARE1 || type === VisualizerType.SQUARE1_NET;
}

/**
 * Encapsulates logic for setting up a puzzle environment for rendering
 * images. Sets up puzzle geometry, applies any algorithm or masking
 * if necessary, and renders the puzzle
 */
export class Visualizer {
  private camera: Camera;
  private scene: Scene;
  private renderer: Renderer;
  private type: VisualizerType;
  private options: PuzzleOptions;

  public puzzleGeometry: PuzzleGeometry;
  public simulator: Simulator;

  constructor(
    renderer: Renderer,
    type: VisualizerType,
    options: PuzzleOptions = {}
  ) {
    this.type = type;
    this.camera = new Camera();
    this.scene = new Scene();
    this.renderer = renderer;
    this.options = { ...getDefaultOptions(type), ...options };

    [this.puzzleGeometry, this.simulator] = puzzleFactory(type, options);
    this.scene.add(this.puzzleGeometry.group);

    if (options.stickerColors && !isSquare1(type)) {
      this.applyManualColors(options);
    } else {
      this.applySimulatorColors(options);
    }

    this.render();
  }

  private applyManualColors(options: PuzzleOptions) {
    this.puzzleGeometry.setColors(options.stickerColors);
  }

  private applySimulatorColors(options: PuzzleOptions) {
    if (options.mask) this.applyMask(options);
    if (options.alg || options.case) this.applyAlgorithm(options);

    const faceValues = this.simulator.getValues();
    const faceColors = applyColorScheme(faceValues, options.scheme);

    this.puzzleGeometry.setColors(faceColors);
  }

  private applyAlgorithm(options: PuzzleOptions) {
    if (isSquare1(this.type)) {
      // puzzle factory applies algorithm to square 1 when greating the puzzle geometry
      return;
    }

    if (options.case) {
      this.simulator.case(options.case);
    } else if (options.alg) {
      this.simulator.alg(options.alg);
    }
  }

  private applyMask(options: PuzzleOptions) {
    Object.keys(options.mask).forEach((maskedFace) => {
      options.mask[maskedFace].forEach((index) =>
        this.simulator.setValue(maskedFace, index, "mask")
      );
    });
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
