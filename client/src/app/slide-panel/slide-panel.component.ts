import {     
  Component,
  OnInit,
  OnDestroy,
  trigger,
  state,
  style,
  transition,
  animate,
  HostListener,
  NgModule,
  HostBinding
} from '@angular/core';
import {query, animateChild} from '@angular/animations';
import {Subscription} from "rxjs/Rx";
import { HttpService } from '../http.service';

@Component({
  selector: 'app-slide-panel',
  templateUrl: './slide-panel.component.html',
  styleUrls: ['./slide-panel.component.scss'],
  animations: [
    // trigger('panelExpandTrigger', [
    //   state('expanded', style({width: '100%'})),
    //   state('collapsed', style({width: '60px'})),
    //   transition('collapsed => expanded', animate('400ms ease-in')),
    //   transition('expanded => collapsed', animate('400ms 200ms ease-out')),
    // ]),
    trigger('panelExpandTrigger', [
      state('expanded', style({transform: 'translateX(0)'})),
      state('collapsed', style({transform: 'translateX(-95%)'})),
      transition('collapsed => expanded', animate('400ms 200ms ease-in')),
      transition('expanded => collapsed', animate('400ms 200ms ease-out')),
    ]),

    trigger('visibleTrigger', [
      state('expanded', style({transform: 'translateX(0)'})),
      state('collapsed', style({transform: 'translateX(-95%)'})),
      transition('collapsed => expanded', animate('400ms 200ms ease-in')),
      transition('expanded => collapsed', animate('400ms 200ms ease-out')),

      // state('visible', style({ opacity: '1', transform: 'translateX(0)' })),
      // transition('void => *', [style({ opacity: '0', transform: 'translateX(-1%)' }), animate('100ms 100ms')]),
      // transition('* => void', [animate('100ms', style({ opacity: '0' }))]),

    ])
  ]
})
export class SlidePanelComponent implements OnInit {
  expanded = true;
  expandedState = "expanded";
  mobile = false;

  signal_main=false;
  signal_load=false;

  amnh_scroll=false;
  amnh_zoom=false;


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth < 480){
      this.mobile = true;
      this._httpService.mobile=true;
      this.expandedState = 'expanded';
      this.expanded = true;
    }
    if(window.innerWidth > 480){
      this.mobile = false;
      this._httpService.mobile=false;
    }
  }


  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    if(window.innerWidth < 480){
      this.mobile = true;
      this._httpService.mobile=true;
    }

  }

  toggleExpandedState() {
    if(!this.mobile){
      this.expandedState = this.expanded ? 'collapsed' : 'expanded';
      this.expanded = !this.expanded;
    }

  }

}
