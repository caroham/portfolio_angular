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
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _httpService: HttpService) { }
}
