import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { StandModel } from 'src/app/models/stand-model';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  filter!: FormControl;
  suburbs!: Observable<string[]>;
  filterObservable!: Observable<string>;
  filteredSearch!: Observable<string[]>;

  constructor(public databaseService: DatabaseService) {
    this.filter = new FormControl('');
    this.filterObservable = this.filter.valueChanges.pipe(startWith(''));
    this.filteredSearch = combineLatest(
      databaseService.getAllStandLocations(),
      this.filterObservable
    ).pipe(
      map(([suburbs, string]) =>
        suburbs.filter(
          (suburb) => suburb.toLowerCase().indexOf(string.toLowerCase()) !== -1
        )
      )
    );
  }

  ngOnInit(): void {}

  searchStands(e: any): void {
    this.databaseService.searchStandsFromSurbab(e.target.value);
  }
}
