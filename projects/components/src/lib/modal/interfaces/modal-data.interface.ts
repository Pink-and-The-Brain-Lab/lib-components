import { ComponentType } from "@angular/cdk/portal";

export interface IModalConfig<T, K> {
    clickOutsideToClose?: boolean;
    hasBackdrop?: boolean,
    data?: T;
    heigth?: string | number;
    width?: string | number;
    maxWidth?: string | number;
    backdropClass?: string;
    panelClass?: string;
    title?: string;
    acceptButtonLabel?: string;
    declineButtonLabel?: string;
    showCloseButton?: boolean;
    component?: ComponentType<K>;
}