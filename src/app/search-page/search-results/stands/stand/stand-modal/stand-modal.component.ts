import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StandModel } from 'src/app/models/stand-model';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-stand-modal',
  templateUrl: './stand-modal.component.html',
  styleUrls: ['./stand-modal.component.scss'],
})
export class StandModalComponent implements OnInit {
  @Input() stand!: StandModel;
  envelope = faEnvelope;
  whatsappIcon = faWhatsapp;
  phoneIcon = faPhone;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
