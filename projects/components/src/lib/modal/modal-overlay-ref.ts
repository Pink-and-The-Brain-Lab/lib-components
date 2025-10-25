import { OverlayRef } from "@angular/cdk/overlay";
import { Subject } from "rxjs";

export class ModalOverlayRef<T> {
    accepted = new Subject<T>();
    declined = new Subject<void>();

    constructor (private overlayRef: OverlayRef) {}

    close() {
        this.overlayRef.dispose();
    }

    accept(data: T) {
        this.close();
        if (data) this.accepted.next(data);
    }

    decline() {
        this.close();
        this.declined.next();
    }
}