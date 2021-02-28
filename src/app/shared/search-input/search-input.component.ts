import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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
  suburbs!: string[];
  filterObservable!: Observable<string>;
  filteredSearch!: Observable<string[]>;

  constructor(public databaseService: DatabaseService, private router: Router) {
    this.filter = new FormControl('');
    databaseService.getAllStandLocations().subscribe({
      next: (suburbs) => (this.suburbs = suburbs),
    });

    this._filter;
  }

  ngOnInit(): void {
    this.filteredSearch = this.filter.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.suburbs.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  goToSearch(surbarb: string) {
    console.log(surbarb);
    this.databaseService.searchStandsFromSurbab(surbarb);
    this.router.navigateByUrl('/search');
  }

  searchStands(e: any): void {
    this.databaseService.searchStandsFromSurbab(e.target.value);
  }
}
