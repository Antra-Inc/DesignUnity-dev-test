import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab.component';
interface Tab {
  active: boolean;
  title: string | 'Luxury';
}
@Component({
  selector: 'du-tabs',
  templateUrl: './du-tabs.component.html',
  styleUrls: ['./du-tabs.component.scss'],
})
export class DuTabsComponent {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  @Output() changeLayout = new EventEmitter<any>();
  @Output() changeTab = new EventEmitter<any>();
  @Input() options!: boolean;
  // contentChildren are set
  ngAfterContentInit() {
    console.log('options', this.options);

    // get all active tabs
    let activeTabs = this.tabs.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: Tab) {
    // deactivate all tabs
    console.log('tab', tab.title);
    this.changeTab.emit(tab.title);
    this.tabs.toArray().forEach((tab) => (tab.active = false));

    // activate the tab the user has clicked on.
    tab.active = true;
  }
  public selectLayout(data: number): void {
    this.changeLayout.emit(data);
  }
}
