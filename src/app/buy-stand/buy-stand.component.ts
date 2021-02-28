import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { ToastrService } from '../services/toast/toast.service';

@Component({
  selector: 'app-buy-stand',
  templateUrl: './buy-stand.component.html',
  styleUrls: ['./buy-stand.component.scss'],
})
export class BuyStandComponent implements OnInit {
  agreeCheck: boolean = false;
  payButton: boolean = true;
  incardDetails = false;
  cardnum = false;
  on = true;
  btnNext = 'Next';

  //image slides
  slides = [
    { image: '/assets/land.png' },
    { image: '/assets/card.png' },
    { image: '/assets/card2.png' },
    { image: '/assets/card3.png' },
  ];

  constructor(
    // private toastr: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  check() {
    this.agreeCheck = !this.agreeCheck;
  }
  next() {
    if (this.agreeCheck) {
      this.on = false;
      this.cardnum = true;
      this.payButton = false;
      this.btnNext = 'Back';
      this.incardDetails = true;
    } else {
      // this.toastr.error('you need to agree to continue');
    }
  }
  back() {
    this.on = true;
    this.cardnum = false;
    this.payButton = true;
    this.btnNext = 'Next';
    this.incardDetails = false;
    this.agreeCheck = false;
  }

  payResoonse() {
    // this.toastr.success('Payment Successful');
  }

  logout() {
    this.authService.logout();
  }
}
