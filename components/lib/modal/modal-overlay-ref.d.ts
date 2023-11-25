import { OverlayRef } from "@angular/cdk/overlay";
import { Subject } from "rxjs";
export declare class ModalOverlayRef<T> {
    private overlayRef;
    accepted: Subject<T>;
    declined: Subject<void>;
    constructor(overlayRef: OverlayRef);
    close(): void;
    accept(data: T): void;
    decline(): void;
}
