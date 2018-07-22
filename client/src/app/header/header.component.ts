import { HttpService } from '../http.service';
import {     
  Component,
  OnInit,
  OnDestroy,
  trigger,
  state,
  style,
  transition,
  animate,
  HostListener
} from '@angular/core';
import {query, animateChild} from '@angular/animations';
import {Subscription} from "rxjs/Rx";

// import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('navExpandTrigger', [
      state('navExpanded', style({ 'min-height': '760px', 'padding-bottom': '20px'})),
      state('navCollapsed', style({height: '80px'})),
      transition('navCollapsed => navExpanded', animate('600ms 200ms ease-in')),
      transition('navExpanded => navCollapsed', animate('600ms 200ms ease-out')),
    ]),
    trigger('aboutVisibleTrigger', [
      // state('navExpanded', style({opacity: '1'})),
      // state('navCollapsed', style({opacity: '0'})),
      // transition('navCollapsed => navExpanded', animate('1000ms 1000ms ease-in')),
      // transition('navExpanded => navCollapsed', animate('1000ms 1000ms ease-out'))

      // state('visible', style({ opacity: '1'})),
      // transition('void => *', [style({ opacity: '0'}), animate('200ms')]),
      // transition('* => void', [animate('200ms', style({ opacity: '0' }))]),

      state('in', style({ opacity: '1' })),
      transition('void => *', [
          animate('300ms 800ms', style({ opacity: '1' }))
      ]),
      transition('* => void', [
          animate('300ms', style({ opacity: '0' }))
      ])
    ]),
    
  ]
})
export class HeaderComponent implements OnInit {   
  navState = "navCollapsed";
  navExpanded = false;
  mobile=false;
  mobileHeight = '800px';
  lgHeight = '700px';
  height = this.lgHeight;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth < 480){
      this.mobile = true;
      this._httpService.mobile=true;
      this.height = this.mobileHeight;
    }
    if(window.innerWidth > 480){
      this.mobile = false;
      this._httpService.mobile=false;
      this.height = this.lgHeight;
    }
  }

  constructor(
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
  }

  toggleNavState(){
    if(this._httpService.mobile) {
      this.mobile = true;
      this.height = this.mobileHeight;
    } else {
      this.mobile=false;
      this.height = this.lgHeight;
    }
    this.navState = this.navExpanded ? 'navCollapsed' : 'navExpanded';
    this.navExpanded = !this.navExpanded;
  }

}
