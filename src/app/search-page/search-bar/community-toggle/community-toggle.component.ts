import { Component, OnInit } from '@angular/core';
import {
  Community,
  CommunityToLabelMapping,
} from 'src/app/models/enums/location.enum';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-community-toggle',
  templateUrl: './community-toggle.component.html',
  styleUrls: ['./community-toggle.component.scss'],
})
export class CommunityToggleComponent implements OnInit {
  communityTypes!: string[];
  selectedCommunity: Community = Community.none;

  constructor(private databaseService: DatabaseService) {
    this.communityTypes = Object.keys(Community);
    // this.communityTypes.push('')
    // console.log(this.communityTypes);
  }

  ngOnInit(): void {}

  filterFromCommunityType(communityTypeFilter: string) {
    let comm: Community;
    switch (communityTypeFilter) {
      case 'none':
        comm = Community.none;
        break;
      case 'HighDensity':
        comm = Community.HighDensity;
        break;
      case 'MidDensity':
        comm = Community.MidDensity;
        break;
      case 'LowDensity':
        comm = Community.LowDensity;
        break;
      default:
        comm = Community.none;
        break;
    }

    this.selectedCommunity = comm;

    this.databaseService.communityFilterChanged(comm);
  }
}
