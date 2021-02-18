import { Component, OnInit } from '@angular/core';
import { StandModel } from 'src/app/models/stand-model';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-stands',
  templateUrl: './stands.component.html',
  styleUrls: ['./stands.component.scss'],
})
export class StandsComponent implements OnInit {
  stands!: StandModel[];

  constructor(public databaseService: DatabaseService) {}

  ngOnInit(): void {}
}
