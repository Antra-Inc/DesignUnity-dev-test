import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  ReflectiveInjector,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DuDialogComponent } from '../shared/du-dialog/du-dialog.component';

export const DIALOG_DATA = new InjectionToken<any>('DIALOG_DATA');

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  componentRef: ComponentRef<DuDialogComponent> | null = null;
  @Input() title: string = '';
  @Input() isVisible: boolean = false;
  @Input() data: any;
  @Input() footerButtons: { text: string; action: () => void }[] = [];
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  openDialog(
    component: any,
    data: any,
    title?: string,
    footerButtons: { text: string; action: () => void }[] = []
  ) {
    if (this.componentRef) {
      this.closeDialog();
    }

    const factory =
      this.componentFactoryResolver.resolveComponentFactory(DuDialogComponent);
    const injector = ReflectiveInjector.resolveAndCreate(
      [
        {
          provide: DIALOG_DATA,
          useValue: { component, data, title, footerButtons },
        },
      ],
      this.injector
    );
    const componentRef = factory.create(injector);
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    ((componentRef.instance as any).data = data.data),
      ((componentRef.instance as any).data = data.message),
      (this.componentRef = componentRef);

    // this.dialogData.next({ component, data });
    this.componentRef.instance.title = title;
    this.componentRef.instance.data = data;
    this.componentRef.instance.footerButtons = footerButtons;
  }

  closeDialog() {
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
  private dialogData = new BehaviorSubject<any>(null);
  dialogData$ = this.dialogData.asObservable();

  // openDialog(component?: any, data?: any) {
  //   // this.dialogData.next({ component, data });
  // }

  // closeDialog() {
  //   if (this.componentRef) {
  //     this.appRef.detachView(this.componentRef.hostView);
  //     this.componentRef.destroy();
  //     this.componentRef = null;
  //   }
  // }
}
