import { Component, Input, OnInit } from '@angular/core';
import { StandModel } from 'src/app/models/stand-model';

@Component({
  selector: 'app-stand',
  templateUrl: './stand.component.html',
  styleUrls: ['./stand.component.scss'],
})
export class StandComponent implements OnInit {
  @Input() stand!: StandModel;

  constructor() {}

  ngOnInit(): void {}
}
