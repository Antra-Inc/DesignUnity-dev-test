import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Inject,
  Injector,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DIALOG_DATA, DialogService } from 'src/app/service/dialog.service';

@Component({
  selector: 'du-dialog',
  templateUrl: './du-dialog.component.html',
  styleUrls: ['./du-dialog.component.scss'],
})
export class DuDialogComponent implements AfterViewInit {
  title: any;
  isVisible = false;
  data: any;
  footerButtons: { text: string; action: () => void }[] = [];

  @ViewChild('dynamicContent', { read: ViewContainerRef }) container:
    | ViewContainerRef
    | undefined;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private dialogservice: DialogService,
    @Inject(DIALOG_DATA) public dialogData: any,
    private cdRef: ChangeDetectorRef
  ) {}
  ngAfterViewInit(): void {
    this.loadComponent();
    if (this.dialogData) {
      this.title = this.dialogData.title;
      this.data = this.dialogData.data;
      this.footerButtons = this.dialogData.footerButtons;
    }
  }

  ngOnInit(): void {}

  loadComponent() {
    const data = this.injector.get(DIALOG_DATA, null); // Retrieve injected data
    if (data && this.container) {
      this.container.clear();
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(
          this.dialogData.component
        );
      // Clear any previous components
      const componentRef = this.container.createComponent(componentFactory);
      (componentRef.instance as any).newInputData = data;

      this.cdRef.detectChanges();
    }
  }

  close() {
    if (this.container) {
      this.dialogservice.closeDialog();
    }
  }
}
