import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DropDownAnimation } from './drop-animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // animations: [
  //   trigger('hamburguerX', [
  //     /*
  //       state hamburguer => is the regular 3 lines style.
  //       states topX, hide, and bottomX => used to style the X element
  //     */
  //     state('hamburguer', style({})),
  //     // style top bar to create the X
  //     state(
  //       'topX',
  //       style({
  //         transform: 'rotate(45deg)',
  //         transformOrigin: 'left',
  //         margin: '6px',
  //       })
  //     ),
  //     // hides element when create the X (used in the middle bar)
  //     state(
  //       'hide',
  //       style({
  //         opacity: 0,
  //       })
  //     ),
  //     // style bottom bar to create the X
  //     state(
  //       'bottomX',
  //       style({
  //         transform: 'rotate(-45deg)',
  //         transformOrigin: 'left',
  //         margin: '6px',
  //       })
  //     ),
  //     transition('* => *', [
  //       animate('0.2s'), // controls animation speed
  //     ]),
  //   ]),
  // ],
  animations: [DropDownAnimation],
})
export class HeaderComponent implements OnInit, OnChanges {
  screenSize!: number;
  open = false;
  isHamburguer = true;
  menuState: string = 'out';
  ngOnInit(): void {
    console.log('window.innerWidth', window.innerWidth);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.screenSize = window.innerWidth;
    console.log('window.innerWidth', window.innerWidth);
  }
  onClick() {
    this.isHamburguer = !this.isHamburguer;
  }
  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
