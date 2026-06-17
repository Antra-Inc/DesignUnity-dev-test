import {
  animate,
  query,
  sequence,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const DropDownAnimation = [
  // Drop-down Menu Animation
  trigger('dropDownMenu', [
    transition(':enter', [
      style({ height: 0, overflow: 'hidden' }),
      query('.menu-item', [
        style({ opacity: 0, transform: 'translateY(-50px)' }),
      ]),
      sequence([
        animate('200ms', style({ height: '*' })),
        query('.menu-item', [
          stagger(-50, [
            animate('400ms ease', style({ opacity: 1, transform: 'none' })),
          ]),
        ]),
      ]),
    ]),

    transition(':leave', [
      style({ height: '*', overflow: 'hidden' }),
      query('.menu-item', [style({ opacity: 1, transform: 'none' })]),
      sequence([
        query('.menu-item', [
          stagger(50, [
            animate(
              '400ms ease',
              style({ opacity: 0, transform: 'translateY(-50px)' })
            ),
          ]),
        ]),
        animate('200ms', style({ height: 0 })),
      ]),
    ]),
  ]),

  // Collapse/Expand Animation
  trigger('drop', [
    state(
      'collapsed',
      style({
        transform: 'translateY(-100%)', // Initially above the container (hidden)
        opacity: 1,
        height: '0', // Height collapsed to 0
        overflow: 'hidden', // Ensure content does not spill out
      })
    ),
    state(
      'expanded',
      style({
        transform: 'translateY(0)', // Final position (visible)
        opacity: 1,
        height: 'fit-content', // Height expands based on content
        overflow: 'hidden', // Ensure content doesn't overflow during animation
      })
    ),
    transition('collapsed <=> expanded', [
      animate('300ms ease-in-out'), // Smooth transition for transform, opacity, and height
    ]),
  ]),
];
