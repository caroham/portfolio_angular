import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
mobile = false;
  constructor(private _http: HttpClient) { }

}

