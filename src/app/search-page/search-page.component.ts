import { Component, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  currentDisplay: string = 'Cards';
  nextDisplay: string = 'Map';

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Matches small viewport or handset in portrait mode');
          this.currentDisplay = 'Cards';
        } else {
          console.log('desktop');
          this.currentDisplay = 'desktop';
        }
      });
  }

  switchDisplay() {
    if (this.currentDisplay === 'Map' || this.currentDisplay === 'desktop') {
      this.currentDisplay = 'Cards';
      this.nextDisplay = 'Map';
    } else if (this.currentDisplay === 'Cards') {
      this.currentDisplay = 'Map';
      this.nextDisplay = 'Cards';
    }
  }
}
