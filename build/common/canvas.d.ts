/**
 * Canvas Form
 */
export declare class Canvas {
    private _canvas;
    private _elBody;
    private _elHeader;
    constructor();
    get el(): HTMLElement;
    hide(): void;
    private render;
    setBody(content: any): void;
    setHeader(content: any): void;
    setType(type: any): void;
    show(): void;
}
export declare const CanvasForm: Canvas;
