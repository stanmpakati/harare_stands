import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable, Observer } from 'rxjs';
import { scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private trigger = new Subject();
  private state: any;

  constructor() {
    this.state = this.trigger.pipe(scan((current) => !current, true));
  }

  public toggleDim() {
    this.trigger.next();
  }

  public getDim(): Observable<boolean> {
    return this.state.asObservable();
  }
}
