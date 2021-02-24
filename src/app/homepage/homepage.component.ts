import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  public isMenuCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  searchStand() {
    this.router.navigateByUrl('/search');
  }
}
