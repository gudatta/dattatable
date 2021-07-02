/**
 * Modal
 */
export declare class ModalDialog {
    private _modal;
    private _elBody;
    private _elFooter;
    private _elHeader;
    private _onCloseEvent;
    constructor();
    hide(): void;
    private render;
    setBody(content: any): void;
    setCloseEvent(event: any): void;
    setFooter(content: any): void;
    setHeader(content: any): void;
    setType(type: any): void;
    show(): void;
}
export declare const Modal: ModalDialog;
