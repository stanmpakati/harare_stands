import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Community } from 'src/app/models/enums/location.enum';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
  communities!: string[];
  selectedCommunity!: string;

  constructor(
    private databaseService: DatabaseService,
    private router: Router
  ) {
    this.communities = Object.keys(Community);
  }

  ngOnInit(): void {}

  searchCommunity(comm: string) {
    let st: Community;
    switch (comm) {
      case 'Residential':
        st = Community.HighDensity;
        break;
      case 'Commercial':
        st = Community.LowDensity;
        break;
      case 'Farmland':
        st = Community.MidDensity;
        break;
      default:
        st = Community.none;
        this.databaseService.resetFilter();
        break;
    }

    this.selectedCommunity = comm;

    this.databaseService.searchCommunity(st);
    this.router.navigateByUrl('/search');
  }
}
