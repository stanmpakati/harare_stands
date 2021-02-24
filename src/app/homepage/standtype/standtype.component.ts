import { Component, OnInit } from '@angular/core';
import { StandType } from 'src/app/models/enums/stand-type.enum';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-standtype',
  templateUrl: './standtype.component.html',
  styleUrls: ['./standtype.component.scss'],
})
export class StandtypeComponent implements OnInit {
  standTypes!: string[];
  selectedStandType!: string;

  constructor(private databaseService: DatabaseService) {
    this.standTypes = Object.keys(StandType);
  }

  ngOnInit(): void {}

  searchStandType(standType: string) {
    let st: StandType;
    switch (standType) {
      case 'Residential':
        st = StandType.Residential;
        break;
      case 'Commercial':
        st = StandType.Commercial;
        break;
      case 'Farmland':
        st = StandType.Farmland;
        break;
      case 'Industrial':
        st = StandType.Industrial;
        break;
      default:
        st = StandType.Residential;
        this.databaseService.resetFilter();
        break;
    }

    this.selectedStandType = st;

    this.databaseService.searchByStandType(st);
  }
}
