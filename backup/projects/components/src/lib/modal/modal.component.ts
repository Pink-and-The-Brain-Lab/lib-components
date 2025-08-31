import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, Inject, Injector, OnDestroy, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { IModalConfig } from './interfaces/modal-data.interface';
import { OVERLAY_DATA } from './interfaces/overlay-data.const';
import { ModalOverlayRef } from './modal-overlay-ref';
import { ModalService } from './services/modal.component.service';
import { Subject } from 'rxjs';
import { IMAGE_DATA } from './interfaces/image-data.const';
import { MODAL_SERVICE_DATA } from './interfaces/modal-service-data.const';

@Component({
  selector: 'cdk-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent<T, K> implements AfterViewChecked, AfterViewInit, OnDestroy {

  private destroy$ = new Subject<boolean>();
  @ViewChild('modalContainer', { read: ViewContainerRef, static: false })
  private modalContainer!: ViewContainerRef;
  private resultData: T = {} as T;

  constructor(
    public dialogRef: ModalOverlayRef<T>,
    @Inject(OVERLAY_DATA) public modalData: IModalConfig<T, K>,
    private cdref: ChangeDetectorRef,
    private modalService: ModalService<T, K>
  ) {
    this.modalService.componentResultData.subscribe((data: T) => this.resultData = data);
  }

  ngAfterViewInit(): void {
    const injector = this.createInjector()
    this.modalContainer.createComponent<K>(this.modalData.component as Type<K>, {
      injector
    });
  }

  ngAfterViewChecked() {
    this.cdref.detectChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  accept() {
    this.dialogRef.accept(this.resultData);
  }

  decline() {
    this.dialogRef.decline();
  }

  close() {
    this.dialogRef.close();
  }

  private createInjector(): Injector {
    return Injector.create({
      providers: [
        { provide: IMAGE_DATA, useValue: this.modalData.data },
        { provide: MODAL_SERVICE_DATA, useValue: this.modalService },
      ],
    });
  }
}
