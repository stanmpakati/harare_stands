import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  @Input() query!: string;
  availability: boolean = true;
  sortSetting: string = 'price';
  showFilters: boolean = true;

  constructor(private dbService: DatabaseService) {}

  ngOnInit(): void {}

  isSoldNot() {
    this.dbService.filterIsSold(this.availability);
  }

  toggleSort(sort: string): void {
    this.sortSetting = sort;
    this.dbService.sortStands(sort);
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  resetFilters() {
    this.dbService.resetFilter();
  }
}
