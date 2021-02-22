import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-availability-toggle',
  templateUrl: './availability-toggle.component.html',
  styleUrls: ['./availability-toggle.component.scss'],
})
export class AvailabilityToggleComponent implements OnInit {
  availability!: boolean;

  constructor() {}

  ngOnInit(): void {}

  toggleAvailability(availability: boolean): void {
    this.availability = availability;
  }
}
