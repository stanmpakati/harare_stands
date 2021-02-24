import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StandModel } from 'src/app/models/stand-model';
import { StandModalComponent } from './stand-modal/stand-modal.component';

@Component({
  selector: 'app-stand',
  templateUrl: './stand.component.html',
  styleUrls: ['./stand.component.scss'],
})
export class StandComponent implements OnInit {
  @Input() stand!: StandModel;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  open() {
    const modalRef = this.modalService.open(StandModalComponent, {
      centered: true,
    });

    modalRef.componentInstance.stand = this.stand;

    modalRef.result.then(
      (result) => {
        console.log(result);
      },
      (reason) => {
        console.log(reason);
      }
    );
  }
}
