import { Injectable } from '@angular/core';

@Injectable()
export class Hero {

  constructor(public name: string, public state = "inactive") { }
  toggleState(){
    this.state = this.state === "active" ? "inactive" : 'active';
  }

}
