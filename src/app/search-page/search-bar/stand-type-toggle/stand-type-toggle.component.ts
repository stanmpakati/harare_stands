import { Component, OnInit } from '@angular/core';
import { StandType } from 'src/app/models/enums/stand-type.enum';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-stand-type-toggle',
  templateUrl: './stand-type-toggle.component.html',
  styleUrls: ['./stand-type-toggle.component.scss'],
})
export class StandTypeToggleComponent implements OnInit {
  standTypes!: string[];
  selectedStandType: any = 'Stand type';

  constructor(private databaseService: DatabaseService) {
    this.standTypes = Object.keys(StandType);
    this.standTypes.push('None');
  }

  ngOnInit(): void {}

  filterFromStandType(standType: string) {
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

    this.databaseService.standTypeFilterChange(st);
  }
}
