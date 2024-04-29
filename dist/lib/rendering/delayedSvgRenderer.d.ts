import { Camera } from "./camera";
import { Scene } from "./scene";
import { HtmlSvgRenderer } from "./htmlSvgRenderer";
export declare class DelayedSvgRenderer extends HtmlSvgRenderer {
    private renderQueue;
    private renderInterval;
    render(scene: Scene, camera: Camera): void;
    protected renderPolygons(): void;
    private delayRender;
}
//# sourceMappingURL=delayedSvgRenderer.d.ts.map