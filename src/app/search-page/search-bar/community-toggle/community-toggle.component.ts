import { Component, OnInit } from '@angular/core';
import { Community } from 'src/app/models/enums/location.enum';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-community-toggle',
  templateUrl: './community-toggle.component.html',
  styleUrls: ['./community-toggle.component.scss'],
})
export class CommunityToggleComponent implements OnInit {
  communityTypes: string[];
  selectedCommunity: string = 'No community selected';
  c = Community;

  constructor(private databaseService: DatabaseService) {
    this.communityTypes = Object.keys(this.c);
    // this.communityTypes.push('')
    console.log(this.communityTypes);
  }

  ngOnInit(): void {}

  filterFromCommunityType(communityTypeFilter: string) {
    this.selectedCommunity = communityTypeFilter;
    // this.databaseService.filterWithCommunitytype(comm)
  }
}
