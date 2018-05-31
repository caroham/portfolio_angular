import { HttpService } from './http.service';
import {     
  Component,
  OnInit,
  OnDestroy,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import {query, animateChild} from '@angular/animations';
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('navExpandTrigger', [
      state('navExpanded', style({height: '600px'})),
      state('navCollapsed', style({height: '80px'})),
      transition('navCollapsed => navExpanded', animate('600ms 200ms ease-in')),
      transition('navExpanded => navCollapsed', animate('600ms 200ms ease-out')),
    ]),
    trigger('aboutVisibleTrigger', [
      // state('navExpanded', style({opacity: '1'})),
      // state('navCollapsed', style({opacity: '0'})),
      // transition('navCollapsed => navExpanded', animate('200ms 200ms ease-in')),
      // transition('navExpanded => navCollapsed', animate('200ms 200ms ease-out'))

      // state('visible', style({ opacity: '1'})),
      // transition('void => *', [style({ opacity: '0'}), animate('200ms')]),
      // transition('* => void', [animate('200ms', style({ opacity: '0' }))]),

      state('in', style({ opacity: '1' })),
      transition('void => *', [style({ opacity: '0' }),
          animate('100ms 300ms')
      ]),
      transition('* => void', [
          animate('100ms 300ms', style({ opacity: '0' }))
      ])
    ])
  ]
})
export class AppComponent {
  navState = "navCollapsed";
  navExpanded = false;

  constructor(private _httpService: HttpService) { }

  toggleNavState(){
    this.navState = this.navExpanded ? 'navCollapsed' : 'navExpanded';
    this.navExpanded = !this.navExpanded;
  }
}
