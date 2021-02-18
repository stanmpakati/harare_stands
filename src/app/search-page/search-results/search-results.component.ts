import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  @Input() query!: string;
  availability: string = 'available';
  sortSetting: string = 'price';
  showFilters: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggleAvailability(availability: string): void {
    this.availability = availability;
  }

  toggleSort(sort: string): void {
    this.sortSetting = sort;
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }
}
