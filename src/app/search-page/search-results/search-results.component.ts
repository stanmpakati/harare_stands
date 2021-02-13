import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  location: string = 'Harare';
  availability: string = 'available';
  sortSetting: string = 'price';

  constructor() {}

  ngOnInit(): void {}

  toggleAvailability(availability: string): void {
    this.availability = availability;
  }

  toggleSort(sort: string): void {
    this.sortSetting = sort;
  }
}
