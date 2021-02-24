import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {
  cities$!: Observable<string[]>;

  constructor(private databaseService: DatabaseService) {
    this.cities$ = databaseService.getCities();
  }

  ngOnInit(): void {}

  searchCity(city: string) {
    this.databaseService.searchByCity(city);
  }
}
